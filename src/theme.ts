import chroma from "chroma-js";
import { getColors } from "./colors";

// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1. Global variable
//    e.g. "textLink.foreground": colors.fg,
// 2. Color scale
//    e.g. "textLink.foreground": scale.blue[5],
// 3. Per theme. Useful when a certain theme needs an exception
//    e.g. "textLink.foreground": themes({ light: scale.blue[5], light_high_contrast: scale.blue[5], light_colorblind: scale.blue[5], dark: scale.blue[2], dark_high_contrast: scale.blue[3], dark_colorblind: scale.blue[2], dark_dimmed: scale.blue[3] }),

export function getTheme({
  theme,
  name,
}: {
  theme: "zen-dark" | "zen-sakura";
  name: string;
}) {
  const base = getColors(theme);
  const colors = base.colors;
  const syntax = base.syntax;

  const alpha = (color: string, alpha: number) => {
    return chroma(color).alpha(alpha).hex();
  };

  return {
    name: name,
    colors: {
      focusBorder: colors.accent,
      foreground: colors.fg,
      descriptionForeground: colors.text,
      errorForeground: colors.red,
      "widget.shadow": colors.shadow,
      "selection.background": colors.selBg,

      "textLink.foreground": colors.accent,
      "textLink.activeForeground": colors.accent,
      "textBlockQuote.background": colors.excl,
      "textBlockQuote.border": colors.border,
      "textCodeBlock.background": colors.excl,
      "textPreformat.foreground": colors.text,
      "textPreformat.background": colors.excl,
      "textSeparator.foreground": colors.button,

      "icon.foreground": colors.text,
      "keybindingLabel.foreground": colors.fg,

      "button.background": colors.accent,
      "button.foreground": colors.bg,
      "button.hoverBackground": colors.accent70,

      "button.secondaryBackground": colors.button,
      "button.secondaryForeground": colors.text,
      "button.secondaryHoverBackground": alpha(colors.button, 0.75),

      "checkbox.background": colors.bg,
      "checkbox.border": colors.border,

      "dropdown.background": colors.bg,
      "dropdown.border": colors.border,
      "dropdown.foreground": colors.fg,
      "dropdown.listBackground": colors.bg,

      "input.background": colors.bg,
      "input.border": colors.border,
      "input.foreground": colors.fg,
      "input.placeholderForeground": colors.text,

      "badge.foreground": colors.bg,
      "badge.background": colors.accent,

      "progressBar.background": colors.accent,

      "titleBar.activeForeground": colors.text,
      "titleBar.activeBackground": colors.bg,
      "titleBar.inactiveForeground": colors.text,
      "titleBar.inactiveBackground": colors.excl,
      "titleBar.border": colors.border,

      "activityBar.foreground": colors.fg,
      "activityBar.inactiveForeground": alpha(colors.text, 0.75),
      "activityBar.background": colors.bg,
      "activityBarBadge.foreground": colors.bg,
      "activityBarBadge.background": colors.accent,
      "activityBar.activeBorder": colors.accent,
      "activityBar.border": colors.border,

      "sideBar.foreground": alpha(colors.text, 0.75),
      "sideBar.background": colors.bg,
      "sideBar.border": colors.border,
      "sideBarTitle.foreground": colors.fg,
      "sideBarSectionHeader.foreground": colors.fg,
      "sideBarSectionHeader.background": colors.bg,
      "sideBarSectionHeader.border": colors.border,

      "list.foreground": alpha(colors.text, 0.75),
      "list.hoverForeground": colors.accent,
      "list.inactiveSelectionForeground": alpha(colors.text, 0.75),
      "list.activeSelectionForeground": colors.accent,
      "list.hoverBackground": colors.table,
      "list.inactiveSelectionBackground": colors.table,
      "list.activeSelectionBackground": colors.table,
      "list.focusForeground": colors.accent,
      "list.focusBackground": alpha(colors.accent50, 0.25),
      "list.inactiveFocusBackground": colors.selBg20,
      "list.highlightForeground": colors.accent,
      "list.focusHighlightForeground": colors.accent,
      "list.errorForeground": colors.red,
      "list.warningForeground": colors.yellow,
      "listFilterWidget.background": colors.bg,

      "tree.indentGuidesStroke": colors.button,
      "tree.tableColumnsBorder": colors.border,

      "notificationCenterHeader.foreground": colors.text,
      "notificationCenterHeader.background": colors.bg,
      "notifications.foreground": colors.fg,
      "notifications.background": colors.bg,
      "notifications.border": colors.border,
      "notificationsErrorIcon.foreground": colors.red,
      "notificationsWarningIcon.foreground": colors.yellow,
      "notificationsInfoIcon.foreground": colors.accent,

      "pickerGroup.border": colors.border,
      "pickerGroup.foreground": colors.text,
      "quickInput.background": colors.bg,
      "quickInput.foreground": colors.fg,

      "statusBar.foreground": colors.text,
      "statusBar.background": colors.bg,
      "statusBar.border": colors.border,
      "statusBar.focusBorder": colors.border,
      "statusBar.noFolderBackground": colors.bg,
      "statusBar.debuggingForeground": colors.bg,
      "statusBar.debuggingBackground": colors.accent,
      "statusBarItem.prominentBackground": colors.cs,
      "statusBarItem.remoteForeground": colors.accent,
      "statusBarItem.remoteBackground": colors.bg,
      "statusBarItem.hoverBackground": colors.accent70,
      "statusBarItem.hoverForeground": colors.bg,
      "statusBarItem.activeBackground": colors.bg,
      "statusBarItem.focusBorder": colors.border,

      "editorGroupHeader.tabsBackground": colors.bg,
      "editorGroupHeader.tabsBorder": colors.border,
      "editorGroup.border": colors.border,

      "tab.activeForeground": colors.white,
      "tab.inactiveForeground": colors.text,
      "tab.inactiveBackground": colors.bg,
      "tab.activeBackground": alpha(colors.accent50, 0.075),
      "tab.hoverBackground": colors.bg,
      "tab.unfocusedHoverBackground": colors.table,
      "tab.border": colors.border,
      "tab.unfocusedActiveBorderTop": colors.border,
      "tab.activeBorder": colors.accent,
      "tab.unfocusedActiveBorder": colors.bg,
      "tab.activeBorderTop": colors.border,

      "breadcrumb.foreground": colors.text,
      "breadcrumb.focusForeground": colors.fg,
      "breadcrumb.activeSelectionForeground": colors.text,
      "breadcrumbPicker.background": colors.bg,

      "editor.fontFamily":
        "'IBM Plex Mono', 'JetBrains Mono', Consolas, 'Courier New', monospace",
      "editor.fontSize": 15,
      "editor.fontLigatures": true,
      "editor.lineHeight": 2, // Or try 0 for default, then adjust. 2 might be too much in VS Code. Maybe 1.8.
      // Console/Terminal font settings
      "terminal.integrated.fontFamily":
        "'IBM Plex Mono', 'JetBrains Mono', Consolas, 'Courier New', monospace",
      "terminal.integrated.fontSize": 13,
      "terminal.integrated.lineHeight": 1.4,
      "editor.foreground": colors.fg,
      "editor.background": colors.bg,
      "editorWidget.background": colors.bg,
      "editor.foldBackground": colors.bg,
      "editor.lineHighlightBackground": colors.cs,
      "editor.lineHighlightBorder": "#00000000",
      "editorLineNumber.foreground": alpha(colors.text, 0.25),
      "editorLineNumber.activeForeground": colors.text,
      "editorIndentGuide.background": alpha(colors.fg, 0.12),
      "editorIndentGuide.activeBackground": alpha(colors.fg, 0.24),
      "editorWhitespace.foreground": colors.border,
      "editorCursor.foreground": colors.accent,

      "editor.findMatchBackground": colors.accent,
      "editor.findMatchHighlightBackground": colors.second,
      "editor.linkedEditingBackground": colors.second,
      "editor.inactiveSelectionBackground": colors.second,
      "editor.selectionBackground": colors.selBg,
      "editor.selectionHighlightBackground": "#353535",
      "editor.wordHighlightBackground": colors.selBg20,
      "editor.wordHighlightBorder": colors.selBg20,
      "editor.wordHighlightStrongBackground": alpha(colors.excl, 0.3),
      "editor.wordHighlightStrongBorder": alpha(colors.excl, 0.6),
      "editorBracketMatch.background": colors.accent70,
      "editorBracketMatch.border": colors.accent,
      // text selection for High Contrast themes
      "editor.selectionForeground": colors.activeFg,

      "editorInlayHint.background": colors.cs,
      "editorInlayHint.foreground": colors.text,
      "editorInlayHint.typeBackground": colors.cs,
      "editorInlayHint.typeForeground": colors.text,
      "editorInlayHint.paramBackground": colors.cs,
      "editorInlayHint.paramForeground": colors.text,

      "editorGutter.modifiedBackground": colors.dis,
      "editorGutter.addedBackground": colors.green,
      "editorGutter.deletedBackground": colors.red,

      "diffEditor.insertedLineBackground": "#264b33",
      "diffEditor.insertedTextBackground": "#447152",
      "diffEditor.removedLineBackground": "#656e76",
      "diffEditor.removedTextBackground": "#41454b",

      "scrollbar.shadow": colors.shadow,
      "scrollbarSlider.background": colors.accent70,
      "scrollbarSlider.hoverBackground": colors.accent,
      "scrollbarSlider.activeBackground": colors.accent,
      "editorOverviewRuler.border": colors.border,

      "minimapSlider.background": colors.bg,
      "minimap.selectionHighlight": colors.selBg, // selBg
      "minimap.findMatchHighlight": colors.accent50, // accent50
      "minimapSlider.hoverBackground": alpha(colors.accent, 0.1),
      "minimapSlider.activeBackground": alpha(colors.accent, 0.15),

      "panel.background": colors.bg,
      "panel.border": colors.border,
      "panelTitle.activeBorder": colors.accent,
      "panelTitle.activeForeground": colors.fg,
      "panelTitle.inactiveForeground": colors.text,
      "panelInput.border": colors.border,

      "debugIcon.breakpointForeground": colors.red,

      "debugConsole.infoForeground": colors.text,
      "debugConsole.warningForeground": colors.yellow,
      "debugConsole.errorForeground": colors.red,
      "debugConsole.sourceForeground": colors.yellow,
      "debugConsoleInputIcon.foreground": colors.accent,

      "debugTokenExpression.name": colors.text,
      "debugTokenExpression.value": syntax.defaultString, // From DEBUGGER_INLINED_VALUES or DEFAULT_STRING
      "debugTokenExpression.string": syntax.defaultString, // From DEFAULT_STRING
      "debugTokenExpression.boolean": syntax.boolean, // From JSON.KEYWORD (true/false) or GO_TRUE_FALSE
      "debugTokenExpression.number": syntax.number, // From DEFAULT_NUMBER
      "debugTokenExpression.error": syntax.invalid,
      // From CONSOLE_ERROR_OUTPUT or ERRORS_ATTRIBUTES
      "symbolIcon.arrayForeground": syntax.brackets, // DEFAULT_BRACKETS
      "symbolIcon.booleanForeground": syntax.boolean, // JSON.KEYWORD style
      "symbolIcon.classForeground": syntax.className, // CLASS_NAME_ATTRIBUTES
      // For abstract class, VS Code doesn't have a separate SymbolKind.
      // You'd typically rely on the icon theme or text decoration if supported.
      // If you want abstract classes to look different, you might use a slightly
      // different shade if your tokenColor for abstract classes is different.
      // For now, using the class color.
      "symbolIcon.colorForeground": syntax.text,
      "symbolIcon.constantForeground": syntax.constant, // DEFAULT_CONSTANT
      "symbolIcon.constructorForeground": syntax.functionCall, // Like a function
      "symbolIcon.enumeratorForeground": syntax.type, // Using Abstract Class color as a distinct "type-like" green
      "symbolIcon.enumeratorMemberForeground": syntax.constant, // DEFAULT_CONSTANT (or 9373a5 if ENUM_CONST was used)
      "symbolIcon.eventForeground": syntax.keyword, // ANNOTATION_NAME_ATTRIBUTES (events are often annotated)
      "symbolIcon.fieldForeground": syntax.text, // DEFAULT_INSTANCE_FIELD
      "symbolIcon.fileForeground": syntax.type, // A general "resource" green
      "symbolIcon.folderForeground": syntax.className, // A general "container" yellow
      "symbolIcon.functionForeground": syntax.functionDeclaration, // DEFAULT_FUNCTION_DECLARATION
      "symbolIcon.interfaceForeground": syntax.type, // DEFAULT_INTERFACE_NAME
      "symbolIcon.keyForeground": syntax.keyword, // JSON.PROPERTY_KEY
      "symbolIcon.keywordForeground": syntax.keyword, // DEFAULT_KEYWORD
      "symbolIcon.methodForeground": syntax.functionDeclaration, // DEFAULT_INSTANCE_METHOD / DEFAULT_STATIC_METHOD
      "symbolIcon.moduleForeground": syntax.type, // TS.MODULE_NAME
      "symbolIcon.namespaceForeground": syntax.type, // TS.MODULE_NAME
      "symbolIcon.nullForeground": syntax.constant, // JSON.KEYWORD style
      "symbolIcon.numberForeground": syntax.constant, // DEFAULT_NUMBER
      "symbolIcon.objectForeground": syntax.className, // Like a class instance
      "symbolIcon.operatorForeground": syntax.keywordOperator, // DEFAULT_OPERATION_SIGN
      "symbolIcon.packageForeground": syntax.className, // GO_PACKAGE
      "symbolIcon.propertyForeground": syntax.text, // CSS.PROPERTY_NAME or a general property light color
      "symbolIcon.referenceForeground": syntax.text, // For references, if applicable
      "symbolIcon.snippetForeground": syntax.defaultString, // String color
      "symbolIcon.stringForeground": syntax.defaultString, // DEFAULT_STRING
      "symbolIcon.structForeground": syntax.className, // Like a class
      "symbolIcon.textForeground": syntax.text, // TEXT default
      "symbolIcon.typeParameterForeground": syntax.parameter, // TYPE_PARAMETER_NAME_ATTRIBUTES
      "symbolIcon.unitForeground": syntax.constant, // Number-like
      "symbolIcon.variableForeground": syntax.text, // DEFAULT_LOCAL_VARIABLE

      "terminal.foreground": colors.fg,
      // Terminal
      "terminal.background": colors.bg,
      "terminal.border": colors.second,
      "terminalCursor.background": syntax.text,
      "terminalCursor.foreground": syntax.keyword,
      "terminal.ansiBlack": colors.bg,
      "terminal.ansiRed": "#FF5370",
      "terminal.ansiGreen": "#C3E88D",
      "terminal.ansiYellow": "#FFCB6B",
      "terminal.ansiBlue": "#82AAFF", // Standard blue, not from console outputs explicitly
      "terminal.ansiMagenta": syntax.keyword,
      "terminal.ansiCyan": "#89DDFF",
      "terminal.ansiWhite": syntax.text,
      "terminal.ansiBrightBlack": syntax.comment,
      "terminal.ansiBrightRed": "#FF5370",
      "terminal.ansiBrightGreen": "#C3E88D",
      "terminal.ansiBrightYellow": "#FFCB6B",
      "terminal.ansiBrightBlue": "#82AAFF",
      "terminal.ansiBrightMagenta": syntax.keyword,
      "terminal.ansiBrightCyan": "#89DDFF",
      "terminal.ansiBrightWhite": "#FFFFFF",

      "editorBracketHighlight.foreground1": syntax.brackets,
      "editorBracketHighlight.foreground2": syntax.brackets,
      "editorBracketHighlight.foreground3": syntax.brackets,
      "editorBracketHighlight.foreground4": syntax.brackets,
      "editorBracketHighlight.foreground5": syntax.brackets,
      "editorBracketHighlight.foreground6": syntax.brackets, // Chosen purple
      "editorBracketHighlight.unexpectedBracket.foreground": colors.text, // gray

      "gitDecoration.addedResourceForeground": colors.green,
      "gitDecoration.modifiedResourceForeground": colors.fg,
      "gitDecoration.deletedResourceForeground": colors.red,
      "gitDecoration.untrackedResourceForeground": colors.green,
      "gitDecoration.ignoredResourceForeground": colors.text,
      "gitDecoration.conflictingResourceForeground": colors.red,
      "gitDecoration.submoduleResourceForeground": colors.text,

      "debugToolBar.background": colors.bg,
      "editor.stackFrameHighlightBackground": colors.dis,
      "editor.focusedStackFrameHighlightBackground": colors.green,

      "peekViewEditor.matchHighlightBackground": colors.accent50,
      "peekViewResult.matchHighlightBackground": colors.accent50,
      "peekViewEditor.background": colors.bg,
      "peekViewResult.background": colors.bg,

      "settings.headerForeground": colors.fg,
      "settings.modifiedItemIndicator": colors.text,
      "welcomePage.buttonBackground": colors.accent,
      "welcomePage.buttonForeground": colors.bg,
      "welcomePage.buttonHoverBackground": colors.accent50,
    },
    semanticHighlighting: true,
    tokenColors: [
      // Defaults from TEXT attribute
      {
        scope: ["source", "text"],
        settings: {
          foreground: syntax.text,
        },
      },
      // Comments
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: syntax.comment,
          fontStyle: "italic",
        },
      },
      {
        name: "Doc Comment",
        scope: ["comment.block.documentation", "comment.line.documentation"],
        settings: {
          foreground: syntax.comment,
          fontStyle: "italic",
        },
      },
      {
        name: "Doc Comment Tag",
        scope: [
          "comment.block.documentation storage.type", // Javadoc @param
          "comment.block.documentation punctuation.definition.block.tag", // Javadoc tag punctuation
          "comment.block.documentation variable.other", // Javadoc param name
        ],
        settings: {
          foreground: syntax.keyword,
          fontStyle: "italic underline",
        },
      },
      {
        name: "Doc Comment Tag Value",
        scope: [
          "comment.block.documentation string", // For values within doc comments if any
        ],
        settings: {
          foreground: syntax.text,
          fontStyle: "italic",
        },
      },
      // Strings
      {
        name: "String",
        scope: "string",
        settings: {
          foreground: syntax.defaultString,
        },
      },
      {
        name: "String Escape",
        scope: [
          "constant.character.escape",
          "string .source.regexp .meta.character-class", // Regex char class
        ],
        settings: {
          foreground: syntax.stringEscape,
        },
      },
      {
        name: "RegExp String",
        scope: "string.regexp",
        settings: {
          foreground: syntax.defaultString, // JS.REGEXP
        },
      },
      // Numbers
      {
        name: "Number",
        scope: "constant.numeric",
        settings: {
          foreground: syntax.number,
        },
      },
      // Booleans & Null
      {
        name: "Boolean",
        scope: "constant.language.boolean",
        settings: {
          foreground: syntax.boolean, // GO_TRUE_FALSE, RUBY_TRUE_FALSE, JSON.KEYWORD (for true/false)
          fontStyle: "italic", // JSON.KEYWORD implies italic
        },
      },
      {
        name: "Null/Nil",
        scope: [
          "constant.language.null",
          "constant.language.nil",
          "constant.language.undefined", // JS.NULL_UNDEFINED
        ],
        settings: {
          foreground: syntax.number,
          fontStyle: "italic", // JS.NULL_UNDEFINED font type 2
        },
      },
      // Keywords
      {
        name: "Keyword",
        scope: [
          "keyword",
          "storage.type", // class, function, int, var etc.
          "storage.modifier", // static, public, private etc.
        ],
        settings: {
          foreground: syntax.keyword,
          fontStyle: "italic",
        },
      },
      {
        name: "Keyword Operator",
        scope: "keyword.operator",
        settings: {
          foreground: syntax.keywordOperator,
        },
      },
      {
        name: "Control Keywords (if, else, for, while, return, try, catch, etc.)",
        scope: [
          "meta.type.parameters",
          "keyword.control",
          "keyword.control.flow",
          "keyword.control.conditional",
          "keyword.control.loop",
          "keyword.control.exception",
          "meta.parameters",
          "keyword.operator.expression.typeof.ts",
          "keyword.operator.new", // JAVA.NEW
        ],
        settings: {
          foreground: syntax.keyword, // From JAVA.IF_ELSE, JAVA.LOOP, etc.
          fontStyle: "italic",
        },
      },

      {
        name: "Punctuation (Braces, Brackets, Parentheses, Commas, Semicolons)",
        scope: ["punctuation", "meta.brace", "meta.delimiter"],
        settings: {
          foreground: syntax.punctuation,
        },
      },
      {
        name: "Import Type",
        scope: ["meta.import", "meta.block.ts"],
        settings: {
          foreground: syntax.type,
        },
      },
      // Variables & Parameters
      {
        name: "Variable",
        scope: [
          "variable",

          "variable.other.object",
          "variable.other.constant", // For general constants not covered by constant.language
          "support.variable",
        ],
        settings: {
          foreground: syntax.text,
        },
      },
      {
        name: "Parameter",
        scope: "variable.parameter",
        settings: {
          foreground: syntax.number,
        },
      },
      {
        name: "Reassigned Variable/Parameter",
        scope: [
          // VS Code doesn't have a standard scope for this, usually handled by linters.
          // This is a best-effort visual cue.
          "variable.other.reassigned", // A custom scope if you can target it
        ],
        settings: {
          // "fontStyle": "underline" // DEFAULT_REASSIGNED_* uses underline effect
          // Foreground is same as default variable/parameter
        },
      },
      {
        name: "Language Constants (this, super, self)",
        scope: [
          "variable.language.this",
          "variable.language.super",
          "variable.language.self",
        ],
        settings: {
          foreground: syntax.className, // From JS.THIS_SUPER, RUBY_SELF, RUST_SELF
          fontStyle: "italic", // Often italic
        },
      },
      // Functions & Methods
      {
        name: "Function/Method Declaration",
        scope: [
          "entity.name.function",
          // "meta.function entity.name.function",
          "support.function", // Built-in functions
        ],
        settings: {
          foreground: syntax.functionDeclaration, // DEFAULT_FUNCTION_DECLARATION
        },
      },
      {
        name: "Function/Method Call",
        scope: [
          "meta.function-call entity.name.function",
          "support.function.any-method", // More specific calls
        ],
        settings: {
          foreground: syntax.functionCall, // DEFAULT_FUNCTION_CALL
        },
      },
      // Classes, Interfaces, Types
      {
        name: "Class Name",
        scope: [
          "entity.name.class",
          "support.class", // Built-in classes
        ],
        settings: {
          foreground: syntax.className, // CLASS_NAME_ATTRIBUTES
        },
      },
      {
        name: "Abstract Class Name",
        scope: "entity.name.type.abstract", // Not standard, best guess
        settings: {
          foreground: syntax.type, // CLASS_NAME_ATTRIBUTES
        },
      },
      {
        name: "Interface Name",
        scope: [
          "declaration",
          "entity.name.type",
          "entity.name.interface",
          "entity.name.type.interface",
        ],
        settings: {
          foreground: syntax.type,
          fontStyle: "italic",
        },
      },
      {
        name: "Type Parameter / Generic",
        scope: "entity.name.type.parameter",
        settings: {
          foreground: syntax.parameter, // TYPE_PARAMETER_NAME_ATTRIBUTES or KOTLIN_TYPE_PARAMETER
        },
      },
      {
        name: "Inherited Class",
        scope: "entity.other.inherited-class",
        settings: {
          foreground: syntax.type, // DEFAULT_CLASS_REFERENCE
        },
      },
      // Instance/Static Members
      {
        name: "Instance Field/Property",
        scope: [
          "variable.instance",
          "variable.other.property",
          "member.access", // Fallback
        ],
        settings: {
          foreground: syntax.text,
        },
      },
      {
        name: "Static Field/Property",
        scope: ["variable.static", "variable.other.static"],
        settings: {
          foreground: syntax.text,
          fontStyle: "italic",
        },
      },
      {
        name: "Static Final Field",
        scope: "variable.other.constant.static.final", // Highly specific, might not exist
        settings: {
          foreground: syntax.text,
          fontStyle: "italic bold",
        },
      },
      // Decorators/Annotations
      {
        name: "Decorator/Annotation",
        scope: [
          "meta.decorator entity.name.function", // Python decorator
          "meta.decorator punctuation.decorator", // Python @
          "meta.annotation entity.name.type", // Java annotation
          "meta.annotation punctuation.definition.annotation", // Java @
        ],
        settings: {
          foreground: syntax.keyword, // ANNOTATION_NAME_ATTRIBUTES
        },
      },
      {
        name: "Annotation Attribute Name",
        scope: "meta.annotation meta.attribute-pair variable.other", // Approximate
        settings: {
          foreground: syntax.parameter,
        },
      },
      // HTML / XML
      {
        name: "HTML/XML Tag",
        scope: ["entity.name.tag", "punctuation.definition.tag"],
        settings: {
          foreground: syntax.tag, // DEFAULT_TAG
        },
      },
      {
        name: "HTML/XML Tag Brackets",
        scope: "punctuation.definition.tag",
        settings: {
          foreground: syntax.punctuation, // HTML_TAG
        },
      },
      {
        name: "HTML/XML Attribute Name",
        scope: "entity.other.attribute-name",
        settings: {
          foreground: syntax.attribute, // DEFAULT_ATTRIBUTE
          fontStyle: "italic",
        },
      },
      {
        name: "HTML/XML Attribute Value",
        scope: "string.quoted.double.html", // From HTML_ATTRIBUTE_VALUE -> DEFAULT_STRING
        settings: {
          foreground: syntax.defaultString, // DEFAULT_STRING
        },
      },
      {
        name: "HTML/XML Entity",
        scope: "constant.character.entity",
        settings: {
          foreground: syntax.entity, // DEFAULT_ENTITY
        },
      },
      // CSS
      {
        name: "CSS Tag Name",
        scope: "entity.name.tag.css",
        settings: {
          foreground: syntax.tag, // CSS.TAG
        },
      },
      {
        name: "CSS Class Name",
        scope: "entity.other.attribute-name.class.css",
        settings: {
          foreground: syntax.className,
          fontStyle: "italic",
        },
      },
      {
        name: "CSS ID Selector",
        scope: "entity.other.attribute-name.id.css",
        settings: {
          foreground: syntax.keyword, // CSS.HASH
        },
      },
      {
        name: "CSS Pseudo Element/Class",
        scope: [
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.pseudo-class.css",
        ],
        settings: {
          foreground: syntax.keyword,
          fontStyle: "italic",
        },
      },
      {
        name: "CSS Property Name",
        scope: "support.type.property-name.css",
        settings: {
          foreground: syntax.cssPropertyName, // CSS.PROPERTY_NAME
        },
      },
      {
        name: "CSS Property Value",
        scope: [
          "support.constant.property-value.css",
          "constant.numeric.css",
          "support.constant.color.css", // CSS.COLOR
        ],
        settings: {
          foreground: syntax.cssPropertyValue, // CSS.PROPERTY_VALUE or EBC88D for color
        },
      },
      {
        name: "CSS Function",
        scope: "support.function.misc.css",
        settings: {
          foreground: syntax.cssFunction, // CSS.FUNCTION
        },
      },
      {
        name: "CSS Important",
        scope: "keyword.other.important.css",
        settings: {
          foreground: syntax.cssPropertyValue,
          fontStyle: "italic",
        },
      },
      {
        name: "CSS URL",
        scope: "variable.parameter.url.css",
        settings: {
          foreground: syntax.keyword,
          fontStyle: "underline",
        },
      },
      // JSON
      {
        name: "JSON Property Key",
        scope: "support.type.property-name.json",
        settings: {
          foreground: syntax.keyword,
        },
      },
      {
        name: "JSON Keyword (true, false, null)",
        scope: "constant.language.json",
        settings: {
          foreground: syntax.boolean,
          fontStyle: "italic",
        },
      },
      // Markdown
      {
        name: "Markdown Heading",
        scope: "markup.heading",
        settings: {
          foreground: syntax.defaultString, // MARKDOWN_HEADER_LEVEL_1
        },
      },
      {
        name: "Markdown Bold",
        scope: "markup.bold",
        settings: {
          foreground: syntax.tag,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown Italic",
        scope: "markup.italic",
        settings: {
          foreground: syntax.tag,
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown Strikethrough",
        scope: "markup.strikethrough",
        settings: {
          fontStyle: "strikethrough", // Effect only
        },
      },
      {
        name: "Markdown Link Text",
        scope: "string.other.link.title.markdown",
        settings: {
          foreground: syntax.keyword,
          fontStyle: "underline italic",
        },
      },
      {
        name: "Markdown Link Destination/URL",
        scope: "markup.underline.link.markdown",
        settings: {
          foreground: syntax.keyword,
        },
      },
      {
        name: "Markdown Code Span/Block",
        scope: [
          "markup.inline.raw.string.markdown", // Code span
          "markup.fenced_code.block.markdown", // Code block
        ],
        settings: {
          foreground: syntax.keyword,
          fontStyle: "italic", // MARKDOWN_CODE_SPAN_MARKER is italic
        },
      },
      {
        name: "Markdown Quote",
        scope: "markup.quote.markdown",
        settings: {
          foreground: syntax.functionCall,
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown List Marker",
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: syntax.invalid,
          fontStyle: "italic",
        },
      },
      // Specific Language Elements (Examples)
      // Python
      {
        name: "Python Decorator",
        scope: "entity.name.function.decorator.python",
        settings: {
          foreground: syntax.functionDeclaration,
        },
      },
      {
        name: "Python Self/Keyword Argument",
        scope: [
          "variable.parameter.function.language.special.self.python",
          "variable.parameter.function.language.special.cls.python",
          "variable.parameter.function.keyword.python",
        ],
        settings: {
          foreground: syntax.className, // PY.SELF_PARAMETER
          fontStyle: "italic", // PY.SELF_PARAMETER is italic, PY.KEYWORD_ARGUMENT is normal fg F78C6C
        },
      },
      // Java
      {
        name: "Java This/Super",
        scope: "variable.language.this.java",
        settings: {
          foreground: syntax.className, // JAVA.THIS_SUPER
          fontStyle: "italic",
        },
      },
      // JavaScript / TypeScript
      {
        name: "JS/TS Console",
        scope: "support.type.object.console.js",
        settings: {
          foreground: syntax.className,
        },
      },
      {
        name: "JS/TS Module Name / Import Path",
        scope: [
          "string.quoted.double.js", // If import path is a string
          "string.quoted.single.js",
          "variable.other.module.js", // If it's an identifier
        ],
        settings: {
          foreground: "syntax.defaultString", // JS.MODULE_NAME
          fontStyle: "italic",
        },
      },
      {
        name: "TS Type Parameter",
        scope: "entity.name.type.parameter.ts",
        settings: {
          foreground: syntax.className,
        },
      },
      {
        name: "Primitive Types",
        scope: [
          "keyword.operator.expression",
          // TypeScript / JavaScript
          "support.type.primitive",
          "support.type.builtin", // For built-ins like 'ReadonlyArray' etc.

          // Python
          "support.type.python", // For int, str, bool, List, Dict in type hints

          // Java (primitive keywords are 'storage.type', wrapper classes are 'support.class' or 'entity.name.type')
          // This rule might not hit Java's `int`, `boolean` directly if they are `storage.type`.
          // `Integer`, `String` would be caught by `support.class` or `entity.name.type` above.

          // Go
          "support.type.go",

          // C/C++
          "support.type.c",
          "support.type.cpp",

          // Rust (Rust's primitives like i32, bool, str are often part of the language core)
          // They might be `entity.name.type.rust` or `support.type.rust`
          // or even `keyword.type.rust` if the grammar is very specific.
          "support.type.rust",
          "entity.name.type.primitive.rust", // A more specific guess for Rust primitives
        ],
        settings: {
          foreground: syntax.keyword,
          fontStyle: "italic",
        },
      },
      {
        name: "Variable Others",
        scope: ["variable.other.readwrite"],
        settings: {
          foreground: syntax.className,
          fontStyle: "italic",
        },
      },
      // Rust
      {
        name: "Rust Self/Crate/Dyn/Ref/True/False/Unsafe/Use",
        scope: [
          "keyword.other.rust", // For many of these
          "variable.language.self.rust",
          "entity.name.namespace.rust", // crate
        ],
        settings: {
          foreground: syntax.parameter, // Common color for RUST_CRATE, DYN, REF, TRUE_FALSE, UNSAFE, USE
        },
      },
      {
        name: "Rust self (param)",
        scope: "variable.language.self.rust",
        settings: {
          foreground: syntax.className,
          fontStyle: "italic",
        },
      },
      {
        name: "Rust Lifetime",
        scope: "entity.name.type.lifetime.rust",
        settings: {
          foreground: syntax.className,
          fontStyle: "italic",
        },
      },
      {
        name: "Rust Macro",
        scope: "support.function.macro.rust",
        settings: {
          foreground: syntax.text, // org.rust.MACRO based on DEFAULT_IDENTIFIER
        },
      },
      // Generic invalid/deprecated
      {
        name: "Invalid",
        scope: "invalid",
        settings: {
          // Effect color ff5370, effect type 2 (squiggly) usually handled by linter
          foreground: syntax.invalid, // Make text red as well
        },
      },
      {
        name: "Deprecated",
        scope: "invalid.deprecated",
        settings: {
          foreground: syntax.comment,
          // Effect color 616161, effect type 3 (strikethrough)
          fontStyle: "strikethrough",
        },
      },
      // TODOs
      {
        name: "Todo",
        scope: ["meta.todo", "keyword.other.documentation.todo"], // Common TODO scopes
        settings: {
          foreground: syntax.todo,
          fontStyle: "italic",
        },
      },
    ],
  };
}
