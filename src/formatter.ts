import * as vscode from 'vscode';

export class FortyDFormatter implements vscode.DocumentRangeFormattingEditProvider {

    provideDocumentRangeFormattingEdits(
        document: vscode.TextDocument,
        range: vscode.Range,
        options: vscode.FormattingOptions,
        token: vscode.CancellationToken
    ): vscode.TextEdit[] {
        const edits: vscode.TextEdit[] = [];
        let indentLevel = 0;
        const localizedIndent = options.insertSpaces ? " ".repeat(options.tabSize) : "\t";

        const startLine = range.start.line;
        const endLine = range.end.line;

        // Simple heuristic: 
        // Iterate from start of document to establish context if possible, 
        // but for range formatting we often just format the block or need context.
        // For simplistic MVP, we might just look at the lines in range.
        // However, correct indentation requires knowing the state from previous lines.
        // Let's assume we format the whole document for simplicity if range is large, 
        // or just local adjustments. 
        // To be safe for MVP, let's implement a full document formatter logic 
        // even if called on a range, or just formatting selected lines relative to 0? 
        // No, let's use the VS Code indentation rules if possible, but here we do it manually.

        // Keywords that increase indent
        const increaseRegex = /^\s*(If|Else|Case of|While|Repeat|For|For each|Class|Function|constructor|Use)\b/i;
        // Keywords that decrease indent
        const decreaseRegex = /^\s*(End if|Else|End case|End while|Until|End for|End for each|End use)\b/i;

        // Keywords to ignore (single line if) - 4D single line if is "If(...) ... End if" usually involves structure.
        // 4D doesn't strict single line ifs without End if usually? 
        // Actually `If(cond) statement` is valid? No, 4D requires End if usually.
        // One exception: `If(...) ... Else ... End if` inline? No.

        // Initial indent level of the start line?
        // We can guess based on the previous line if startLine > 0
        if (startLine > 0) {
            const prevLine = document.lineAt(startLine - 1).text;
            const prevIndent = prevLine.match(/^\s*/)?.[0] || "";
            // Calculate level from spaces/tabs
            indentLevel = options.insertSpaces ? Math.floor(prevIndent.length / options.tabSize) : prevIndent.length;

            // Adjust if previous line was an opener
            if (increaseRegex.test(prevLine)) {
                indentLevel++;
            }
            // Adjust if previous line was a closer (should have been dedented already)
            // But valid 4D code might be messy.
        }

        for (let i = startLine; i <= endLine; i++) {
            const line = document.lineAt(i);
            const text = line.text;
            const trimmed = text.trim();

            if (trimmed.length === 0) {
                continue; // Skip empty lines or leave them?
            }

            // Check if current line decreases indent (e.g. Else, End if)
            if (decreaseRegex.test(trimmed)) {
                indentLevel = Math.max(0, indentLevel - 1);
            }

            const desiredIndent = localizedIndent.repeat(indentLevel);

            // Apply edit if needed
            const currentIndent = text.match(/^\s*/)?.[0] || "";
            if (currentIndent !== desiredIndent) {
                edits.push(vscode.TextEdit.replace(new vscode.Range(i, 0, i, currentIndent.length), desiredIndent));
            }

            // Check if current line increases indent for NEXT line
            if (increaseRegex.test(trimmed)) {
                // Formatting specific: "Else" decreases for itself, but increases for next.
                // "Else" matches both regexes?
                // decreaseRegex: Else -> indentLevel--
                // increaseRegex: Else -> indentLevel++
                // Net result: indentLevel stays same for next line?
                // No.
                // If ... (level 0) -> next is 1
                //   Code (level 1)
                // Else (level 0) -> decreases first.
                //   Code (level 1) -> increases for next.
                indentLevel++;
            }
        }

        return edits;
    }
}
