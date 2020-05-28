export const ToolbarButtons =  {

  'moreText': {
    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
  },
  'moreParagraph': {
    'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
  },
  'moreRich': {
    'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
  },
  'moreMisc': {
    'buttons': ['my_dropdown', 'undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
    'align': 'right',
    'buttonsVisible': 3
  }
}



export const ImageEditButtons = [
  'imageReplace',
  'imageAlign',
  'imageCaption',
  'imageRemove'
];

export function insertHtmlField(editorInstance: any, html: string) {
  console.log("Should run Insert");
  console.log(html);
  if (editorInstance) {
      // restore selection so element is inserted in the cursor's last known position
      editorInstance.selection.restore();
      editorInstance.html.insert(`${html}`);
  }
}
