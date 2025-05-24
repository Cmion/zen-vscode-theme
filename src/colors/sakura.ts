export default {
  colors: {
    bg: "#212121",
    bg30: "#2121214d",
    fg: "#B0BEC5",
    text: "#727272",
    selBg: "#404040",
    selBg20: "#40404033",
    selFg: "#FFFFFF",
    activeFg: "#FFFFFF",
    border: "#00000000",
    excl: "#323232",
    second: "#292929",
    dis: "#474747",
    accent: "#e093d9",
    acc2: "#e093d9",
    accent50: "#e093d980",
    accent70: "#e093d9b3",
    cs: "#1A1A1A",
    button: "#2A2A2A",
    table: "#323232",
    tree: "#2d2d2d",
    hl: "#3F3F3F",
    notif: "#1A1A1A",
    hc: "#212121",
    shadow: "#00000020",
    green: "#c3e88d",
    red: "#f07178",
    yellow: "#ffcb6b",
    blue: "#82aaff",
    purple: "#c792ea",
    orange: "#f78c6c",
    cyan: "#89ddff",
    white: "#eeffff",
    gray: "#616161",
  },
  syntax: {
    keyword: "#f780bf", // From DEFAULT_KEYWORD
    text: "#f8f8f2", // From TEXT foreground
    comment: "#616161", // From DEFAULT_BLOCK_COMMENT / DEFAULT_LINE_COMMENT
    defaultString: "#feff80", // From DEFAULT_STRING
    type: "#80ffea", // From DEFAULT_CLASS_REFERENCE, JAVA.TYPES, TS.PRIM_TYPE (for type usage/primitives)
    stringEscape: "#f89580", // From DEFAULT_VALID_STRING_ESCAPE
    number: "#9580ff", // From DEFAULT_NUMBER
    boolean: "#9580ff", // From JAVA.NULL, GO.TRUE_FALSE, JS.NULL_UNDEFINED (also DEFAULT_CONSTANT color)
    parameter: "#f89580", // From DEFAULT_PARAMETER
    constant: "#9580ff", // From DEFAULT_CONSTANT (for user-defined constants, enum members)
    keywordOperator: "#f780bf", // From DEFAULT_OPERATION_SIGN
    punctuation: "#f8f8f2", // From ANGLE_BRACKETS_RAINBOW_COLOR0 (aligning with 'brackets' as per your example structure, as general punctuation isn't uniquely colored otherwise)
    brackets: "#f8f8f2", // From ANGLE_BRACKETS_RAINBOW_COLOR0, ROUND_BRACKETS_RAINBOW_COLOR0 etc.
    tag: "#f780bf", // From HTML_TAG_NAME, XML_TAG_NAME
    functionDeclaration: "#8aff80", // From DEFAULT_FUNCTION_DECLARATION
    functionCall: "#50fa78", // From DEFAULT_FUNCTION_CALL
    className: "#78dce8", // From DEFAULT_CLASS_NAME (for class definitions)
    attribute: "#8aff80", // From XML_ATTRIBUTE_NAME (HTML_ATTRIBUTE_NAME uses DEFAULT_ATTRIBUTE which is 50fa78 but this is clearer)
    entity: "#9580ff", // From DEFAULT_ENTITY (e.g., HTML entities)
    cssPropertyName: "#80ffea", // From CSS.PROPERTY_NAME
    cssPropertyValue: "#feff80", // From CSS.PROPERTY_VALUE
    cssFunction: "#80ffea", // From CSS.FUNCTION
    invalid: "#ff5555", // From EFFECT_COLOR of ERRORS_ATTRIBUTES, WRONG_REFERENCES_ATTRIBUTES
    todo: "#79cbdc", // From TODO_DEFAULT_ATTRIBUTES
  },
};
