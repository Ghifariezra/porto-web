import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "font-awesome/css/font-awesome.css";

// Dynamically import Froala Editor and plugins
const FroalaEditorComponent = dynamic(
  async () => {
    await import("froala-editor/js/plugins.pkgd.min.js");
    return (await import("react-froala-wysiwyg")).default;
  },
  { ssr: false }
);

const FroalaEditorView = dynamic(
  () => import("react-froala-wysiwyg/FroalaEditorView"),
  { ssr: false }
);

// Dynamically import Font Awesome plugin for Froala
dynamic(() => import("froala-editor/js/third_party/font_awesome.min.js"), { ssr: false });

type RichEditorProps = {
  content: string | null;
  onChange?: (value: string) => void;
};

const froalaConfig = {
  placeholderText: "Edit Your Content Here!",
  charCounterCount: false,
  imageUpload: true,
  imageUploadURL: "/api/blogs/upload",
  imageUploadMethod: "POST",
  imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "webp"],
  toolbarButtons: {
    moreText: {
      buttons: ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "fontFamily", "fontSize", "textColor", "backgroundColor", "inlineClass", "inlineStyle", "clearFormatting"],
    },
    moreParagraph: {
      buttons: ["alignLeft", "alignCenter", "formatOLSimple", "alignRight", "alignJustify", "formatOL", "formatUL", "paragraphFormat", "paragraphStyle", "lineHeight", "outdent", "indent", "quote"],
    },
    moreRich: {
      buttons: ["insertLink", "insertImage", "insertVideo", "insertTable", "emoticons", "fontAwesome", "specialCharacters", "embedly", "insertFile", "insertHR"],
    },
    moreMisc: {
      buttons: ["undo", "redo", "fullscreen", "print", "getPDF", "spellChecker", "selectAll", "html", "help"],
      align: "right",
      buttonsVisible: 2,
    },
  },
  fontSize: ["12", "14", "16", "18", "20", "22", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "68", "72"],
};

export default function RichEditor({ content, onChange }: RichEditorProps) {
  const [model, setModel] = useState(content || "");

  useEffect(() => {
    if (content !== null) setModel(content);
  }, [content]);

  const handleModelChange = (value: string) => {
    setModel(value);
    onChange?.(value);
  };

  return (
    <div className="flex flex-col gap-8 w-full mb-6">
      <div className="w-full">
        <FroalaEditorComponent tag="textarea" model={model} onModelChange={handleModelChange} config={froalaConfig} />
      </div>
      <div className="preview rounded-2xl border border-slate-300 p-4">
        <FroalaEditorView model={model} />
      </div>
    </div>
  );
}