// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

type ReplacePair = {
	from: RegExp
	to: string
};

const nonBreakingSpace: ReplacePair = {
	from: /\u00A0/gu,
	to: ' '
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log("activation");

	vscode.commands.registerCommand('abcopy.clipboardCopyAction', async () => {
		await vscode.commands.executeCommand('editor.action.clipboardCopyAction');

		// Get the contents of the clipboard
		const text = await vscode.env.clipboard.readText();

		const replacedNonBreakingSpaces = text.replace(
			nonBreakingSpace.from,
			nonBreakingSpace.to
		);

		// Copy the new text to the clipboard
		await vscode.env.clipboard.writeText(replacedNonBreakingSpaces);
	});
}

// This method is called when your extension is deactivated
export function deactivate() { console.log("deactivation"); }
