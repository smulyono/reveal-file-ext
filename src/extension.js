// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import vscode from "vscode";

export function activate(context) {
  let revealMe = vscode.commands.registerCommand("reveal.file", () => {
    vscode.commands.executeCommand(
      "workbench.files.action.showActiveFileInExplorer"
    );
  });
  context.subscriptions.push(revealMe);
}

export function deactivate() {
  console.log("Reveal extension disabled");
}
