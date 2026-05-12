import * as vscode from 'vscode';
import { FortyDFormatter } from './formatter';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "4d-v20-vscode" is now active!');

    // Register Document Range Formatter
    vscode.languages.registerDocumentRangeFormattingEditProvider('4d', new FortyDFormatter());

    // Also register full document formatter reusing the range logic
    vscode.languages.registerDocumentFormattingEditProvider('4d', {
        provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.TextEdit[] {
            const lastLine = document.lineCount - 1;
            const range = new vscode.Range(0, 0, lastLine, document.lineAt(lastLine).text.length);
            return new FortyDFormatter().provideDocumentRangeFormattingEdits(document, range, options, token);
        }
    });

    // Format Command
    let disposable = vscode.commands.registerCommand('4d.format', () => {
        vscode.commands.executeCommand('editor.action.formatDocument');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
