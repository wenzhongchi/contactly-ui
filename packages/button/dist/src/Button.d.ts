import React from "react";
import { StyledComponentProps } from "styled-components";
import { SystemStyleObject } from "@styled-system/css";
import { AnyObject, StyledSystemProps } from "@contactly-ui/system";
export declare type ButtonSize = "sm" | "md" | "lg";
export declare type ButtonVariant = "default" | "primary" | "secondary" | "success" | "warning" | "error" | "text";
declare type ButtonComponentProps = {
    label?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isDisabled?: boolean;
    css?: SystemStyleObject;
};
declare type StyledButtonProps = StyledSystemProps & ButtonComponentProps;
export declare type ButtonProps = StyledComponentProps<"button", AnyObject, StyledButtonProps, never>;
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, {
    boxShadow?: import("styled-system").ResponsiveValue<number | import("csstype").Property.BoxShadow, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    zIndex?: import("styled-system").ResponsiveValue<import("csstype").Property.ZIndex, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    alignContent?: import("styled-system").ResponsiveValue<import("csstype").Property.AlignContent, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    alignItems?: import("styled-system").ResponsiveValue<import("csstype").Property.AlignItems, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    alignSelf?: import("styled-system").ResponsiveValue<import("csstype").Property.AlignSelf, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    backgroundColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderBottomColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderBottomLeftRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderBottomRightRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderBottomStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderBottomStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderBottomWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderLeftColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderLeftStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderLeftStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderLeftWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderRightColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderRightStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderRightStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderRightWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderTopColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderTopLeftRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderTopRightRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderTopStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderTopStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderTopWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    bottom?: import("styled-system").ResponsiveValue<import("csstype").Property.Bottom<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    color?: (string & import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>) | undefined;
    display?: import("styled-system").ResponsiveValue<import("csstype").Property.Display, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    flexBasis?: import("styled-system").ResponsiveValue<import("csstype").Property.FlexBasis<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    flexDirection?: import("styled-system").ResponsiveValue<import("csstype").Property.FlexDirection, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    flexGrow?: import("styled-system").ResponsiveValue<import("csstype").Property.FlexGrow, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    flexShrink?: import("styled-system").ResponsiveValue<import("csstype").Property.FlexShrink, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    flexWrap?: import("styled-system").ResponsiveValue<import("csstype").Property.FlexWrap, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    height?: import("styled-system").ResponsiveValue<import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    justifyContent?: import("styled-system").ResponsiveValue<import("csstype").Property.JustifyContent, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    justifyItems?: import("styled-system").ResponsiveValue<import("csstype").Property.JustifyItems, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    justifySelf?: import("styled-system").ResponsiveValue<import("csstype").Property.JustifySelf, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    left?: import("styled-system").ResponsiveValue<import("csstype").Property.Left<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    marginBottom?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    marginLeft?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    marginRight?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    marginTop?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    maxHeight?: import("styled-system").ResponsiveValue<import("csstype").Property.MaxHeight<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    maxWidth?: import("styled-system").ResponsiveValue<import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    minHeight?: import("styled-system").ResponsiveValue<import("csstype").Property.MinHeight<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    minWidth?: import("styled-system").ResponsiveValue<import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    opacity?: import("styled-system").ResponsiveValue<import("csstype").Property.Opacity, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    order?: import("styled-system").ResponsiveValue<import("csstype").Property.Order, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    overflowX?: import("styled-system").ResponsiveValue<import("csstype").Property.OverflowX, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    overflowY?: import("styled-system").ResponsiveValue<import("csstype").Property.OverflowY, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    paddingBottom?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    paddingLeft?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    paddingRight?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    paddingTop?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    position?: import("styled-system").ResponsiveValue<import("csstype").Property.Position, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    right?: import("styled-system").ResponsiveValue<import("csstype").Property.Right<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    textShadow?: import("styled-system").ResponsiveValue<number | import("csstype").Property.TextShadow, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    top?: import("styled-system").ResponsiveValue<import("csstype").Property.Top<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    translate?: "yes" | "no" | undefined;
    verticalAlign?: import("styled-system").ResponsiveValue<import("csstype").Property.VerticalAlign<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    width?: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    border?: import("styled-system").ResponsiveValue<import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderBottom?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderBottom<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderColor?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderLeft?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderLeft<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderRadius?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderRight?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderRight<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderStyle?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderStyle, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderTop?: import("styled-system").ResponsiveValue<import("csstype").Property.BorderTop<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderWidth?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    flex?: import("styled-system").ResponsiveValue<import("csstype").Property.Flex<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    margin?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    overflow?: import("styled-system").ResponsiveValue<import("csstype").Property.Overflow, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    padding?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    bg?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    m?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    mt?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    mr?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    mb?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    ml?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    mx?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    marginX?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    my?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    marginY?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    p?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    pt?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    pr?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    pb?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    pl?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    px?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    paddingX?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    py?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    paddingY?: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    hidden?: boolean | undefined;
    form?: string | undefined;
    label?: string | undefined;
    slot?: string | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
    key?: React.Key | null | undefined;
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    value?: string | number | readonly string[] | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "true" | "false" | undefined;
    'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
    'aria-busy'?: boolean | "true" | "false" | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: boolean | "true" | "false" | undefined;
    'aria-dropeffect'?: "none" | "link" | "copy" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "true" | "false" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "true" | "false" | undefined;
    'aria-haspopup'?: boolean | "grid" | "dialog" | "menu" | "true" | "false" | "listbox" | "tree" | undefined;
    'aria-hidden'?: boolean | "true" | "false" | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "true" | "false" | undefined;
    'aria-multiline'?: boolean | "true" | "false" | undefined;
    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: boolean | "true" | "false" | undefined;
    'aria-relevant'?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: boolean | "true" | "false" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: boolean | "true" | "false" | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onReset?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onError?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLButtonElement> | undefined;
    size?: (import("styled-system").ResponsiveValue<import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & ButtonSize) | undefined;
    borderX?: import("styled-system").ResponsiveValue<import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    borderY?: import("styled-system").ResponsiveValue<import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    variant?: ButtonVariant | undefined;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isDisabled?: boolean | undefined;
    css?: SystemStyleObject | undefined;
} & {
    theme?: ObjectConstructor | undefined;
}, never>;
export declare const Button: React.FC<ButtonProps>;
export {};