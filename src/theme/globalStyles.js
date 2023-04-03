import { GlobalStyles as MUIGlobalStyles } from "@mui/material";
import palette from "./palette";
import { alpha } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        "*, body *": {
          boxSizing: "border-box",
          fontFamily: "Inter !important",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
          fontFamily: "Inter",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          fontSize: "16px",
          background: "#fff",
          fontFamily: "Inter",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        subtitle1: {
          color: "black",
          padding: 0,
        },
        ReactModal__Overlay: {
          zIndex: "9999 !important",
        },
        ".appWrap": {
          minHeight: "100%",
          minWidth: "100%",
        },
        ".contentWrapper .MuiGrid-grid-xs-3": {
          borderRight: `1px solid ${palette.secondary.main}`,
          "@media(max-width: 992px)": {
            maxWidth: "100%",
            flexBasis: "100%",
            border: "none",
          },
          "@media(max-width: 767px)": {
            display: "none",
          },
        },
        ".contentWrapper": {
          minHeight: "calc(100vh - 61px)",
          paddingRight: "32px",
          "@media (max-width:992px)": {
            minHeight: "auto",
            paddingLeft: "32px",
          },
          "@media (max-width:767px)": {
            minHeight: "auto",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
        },
        ".contentWrapper > .MuiGrid-root": {
          minHeight: "calc(100vh - 61px)",
          "@media (max-width:992px)": {
            minHeight: "auto",
          },
        },
        ".contentWrapper > .MuiGrid-root > .MuiGrid-item.MuiGrid-grid-md-9": {
          // maxHeight: "calc(100vh - 61px)",
          paddingTop: "32px",
          margin: "0 auto",
          // paddingLeft: "24px",
          // maxWidth: "1170px",
          "@media (max-width:991px)": {
            paddingTop: "3px",
          },
          "@media (max-width:767px)": {
            minHeight: "auto",
            paddingTop: "3px",
            paddingLeft: "0",
          },
          overflow: "auto",
        },
        ".menuItems": {
          paddingTop: "23px",
          ".MuiButtonBase-root": {
            padding: "23px 32px",
            "@media (max-width:992px)": {
              marginRight: "62px",
            },
          },
          ".MuiListItemButton-root span": {
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "400",
          },
          "@media (max-width:992px)": {
            display: "flex",
            overflow: "auto",
            padding: 0,
            flex: 1,
            ".MuiListItemButton-root span": {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
              letterSpacing: "0",
            },
          },
          "@media (max-width:767px)": {
            display: "block",
            overflow: "auto",
            flex: 1,
            ".MuiListItemIcon-root": {
              ".hoverIcon": {
                display: "none",
              },
              ".nonHoverIcon": {
                display: "block",
              },
            },
            ".MuiDivider-root": {
              border: "none",
            },
            ".MuiButtonBase-root": {
              padding: "20px",
            },
            ".CustomIconsList": {
              minWidth: "45px",
            },

            ".MuiTypography-root": {
              fontSize: "14px",
              lineHeight: "24px",
            },
          },
        },
        ".contentWrapper .MuiGrid-grid-xs-3 .MuiListItemButton-root": {
          color: palette.primary.dark,
          background: palette.common.white,
          minWidth: "max-content",
          ".hoverIcon": {
            display: "none",
          },
          ".nonHoverIcon": {
            display: "block",
          },
          "@media(max-width: 1440px)": {
            padding: "20px",
            marginRight: "0px",
          },
          "@media(max-width: 992px)": {
            padding: "0",
            marginBottom: "10px",
            borderBottomLeftRadius: "3px",
            borderBottomRightRadius: "3px",
            "> .MuiListItemIcon-root": {
              display: "none !important",
            },
          },
          "&.Mui-selected, &:hover": {
            textDecoration: "underline",
            span: {
              fontWeight: "bold",
            },
            ".hoverIcon": {
              display: "block",
            },
            ".nonHoverIcon": {
              display: "none",
            },
            "@media(max-width: 992px)": {
              borderBottom: `3px solid ${palette.primary.dark}`,
              textDecoration: "none",
            },
          },
          svg: {
            fill: palette.primary.dark,
          },
          ".MuiListItemIcon-root": {
            minWidth: "36px",
            minHeight: "36px",
            display: "flex",
            alignItems: "center",
          },
        },
        ".MuiGrid-item h5": {
          color: "#FFFFFF99",
        },
        ".MuiSelect-select": {
          height: "40px !important",
          boxSizing: "border-box",
          padding: "7px 10px !important",
        },
        ".placeholderText": {
          color: alpha("#919eab", 1),
          fontWeight: 400,
          fontSize: "14px",
        },
        ".error": {
          position: "relative",
          "*": {
            borderColor: `red !important`,
          },
          ".MuiFormLabel-root": {
            color: palette.error.main,
          },
          ".MuiInputBase-root:before": {
            borderBottomColor: alpha(palette.error.main, 0.42),
          },
          ".MuiSvgIcon-root": {
            color: "red",
          },
          ".errorMessage": {
            position: "absolute",
            bottom: "-10px",
            left: 0,
            width: "100%",
            fontSize: "11px",
            color: palette.error.main,
          },
          ".inputErrorMessage": {
            position: "absolute",
            top: "calc(100% - 10px)",
            left: 0,
            width: "100%",
            fontSize: "11px",
            color: palette.error.main,
          },
        },
        "#primary-search-account-menu": {
          ".MuiMenuItem-root": {
            borderTop: `1px solid ${palette.secondary.main}`,
            padding: "11px 13px",
          },
          ".MuiMenuItem-root:hover": {
            background: palette.secondary.main,
          },
          ".MuiPaper-elevation": {
            borderRadius: 0,
            border: `1px solid ${palette.secondary.light}`,
            boxShadow: "none",
            padding: "0 4.5px",
          },
        },
        "div.react-calendar-timeline": {
          ".rct-vertical-lines .rct-vl.rct-day-6, .rct-vertical-lines .rct-vl.rct-day-0, .rct-vertical-lines .rct-vl":
            {
              background: palette.common.white,
              borderLeft: `1px solid ${palette.secondary.main}`,
            },
          ".rct-items": {
            zIndex: 999,
            position: "absolute",
            top: 0,
          },
          ".mileStone": {
            display: "flex",
            paddingTop: "20px",
            fontWeight: 500,
            justifyContent: "center",
            fontSize: "14px",
            lineHeight: "21px",
            fontFamily: "Inter",
          },
          ".rct-horizontal-lines": {
            ".rct-hl-odd": {
              background: palette.common.white,
            },
          },
          ".rct-header-root": {
            background: palette.secondary.light,
          },
          ".rct-calendar-header": {
            borderColor: `${palette.primary.main}`,
            "> div": {
              minHeight: "40px",
              "> div": {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                flexDirection: "column",
                fontSize: "12px",
                lineHeight: "18px",
                borderLeft: `1px solid ${palette.common.white}`,
                color: palette.primary.dark,
                borderTop: `2px solid ${palette.primary.main}`,
                borderBottom: `2px solid ${palette.primary.main}`,
                padding: "1px 3px 3px",
                "&.today": {
                  borderTop: `2px solid ${palette.primary.dark}`,
                  borderBottom: `2px solid ${palette.primary.dark}`,
                },
                strong: {
                  fontSize: "16px",
                  lineHeight: "18px",
                  marginBottom: "2px",
                  fontWeight: "600",
                },
              },
            },
          },
          ".rct-item": {
            background: `transparent !important`,
            border: `none !important`,
            ".rct-item-content": {
              display: "flex !important",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "12px !important",
              color: palette.primary.dark,
              fontSize: "14px",
              height: "100%",
              background: `transparent linear-gradient(90deg, ${palette.secondary.dark} 0%, ${palette.primary.main} 100%) !important`,
              border: `1px solid ${palette.common.white} !important`,
              borderRadius: "80px",
              boxShadow: `5px 5px 15px rgba(0, 0, 0, 0.4)`,
              lineHeight: "21px !important",
              strong: {
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
              "&.isCompleted": {
                background: `${palette.common.white} !important`,
                border: `2px solid ${palette.secondary.main} !important`,
                boxShadow: "none",
                justifyContent: "flex-start",
                span: {
                  marginLeft: "auto",
                },
                svg: {
                  fill: palette.primary.dark,
                  "&.completedIcon": {
                    fill: palette.success.main,
                    marginRight: "10px",
                  },
                },
              },
              "&.weekend": {
                background: "transparent !important",
                border: `1px dashed ${palette.placeholder} !important`,
                boxShadow: "none",
                pointerEvents: "none",
              },
              "&.no-radius-right": {
                borderRadius: "80px 0px 0px 80px",
                borderRight: "none !important",
              },
              "&.no-radius-left": {
                borderRadius: "0px 80px 80px 0px",
                borderRight: "none !important",
              },
              "*": {
                pointerEvents: "none",
              },
              span: {
                display: "flex",
                alignItems: "center",
                color: palette.placeholder,
              },
              svg: {
                marginLeft: "8px",
                fill: palette.primary.dark,
                maxWidth: "20px",
              },
            },
          },
        },
        ".dropdownBtnMobile": {
          padding: "0 5px",
          minWidth: "auto",
          display: "none",
          "@media(pointer:coarse)": {
            display: "block",
          },
          "@media(max-width: 767px)": {
            display: "block",
          },
        },
        ".mobile-dropdown": {
          width: "126px",
          border: `1px solid ${palette.primary.main}`,
          maxHeight: "200px",
          overflowY: "auto",
          marginRight: "20px !important",
          zIndex: 10001,
          ".popoverLink": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            color: palette.primary.light,
            borderTop: `1px solid ${palette.primary.main}`,
            textDecoration: "none",
            textTransform: "none",
            width: "100%",
            "&::first-of-type": {
              borderTop: "none",
            },
            span: {
              fontSize: "14px",
              fontWeight: "normal",
            },
          },
        },
        ".MuiPopover-root": {
          fontFamily: "Inter",
          ".MuiPaper-root": {
            background: palette.common.white,
            boxShadow: "5px 5px 30px #231F201A",
            border: `1px solid ${palette.primary.main}`,
            width: "417px",
            padding: "19px 24px",
            position: "relative",
            overflow: "visible",
          },
          h3: {
            fontSize: "22px",
            lineHeight: "43px",
            fontWeight: "bold",
            borderBottom: `1px solid ${palette.primary.main}`,
            marginBottom: "14px",
            fontFamily: "Inter",
          },
          ".strong": {
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "bold",
            fontFamily: "Inter",
          },
        },
        ".scheduleRow": {
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".scheduleCol": {
          maxWidth: "33.33%",
          width: "100%",
          paddingLeft: "24px",
          "&:first-of-type": {
            paddingLeft: 0,
          },
          "&.red": {
            color: palette.error.main,
          },
          "&.strong": {
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: "bold",
            fontFamily: "Inter",
          },
        },
        ".customProgressBarWrapper": {
          backgroundColor: palette.grey[200],
          height: "20px",
          borderRadius: "100px",
          position: "relative",
        },
        ".customPlannedProgress": {
          backgroundColor: palette.primary.dark,
          border: `1px solid ${palette.grey[300]}`,
          height: "100%",
          borderRadius: "100px",
          "&.red": {
            backgroundColor: palette.error.main,
          },
        },
        ".customActualProgress": {
          border: `1px dashed ${palette.primary.dark}`,
          height: "calc(100% - 2px)",
          position: "absolute",
          top: "1px",
          left: "1px",
          borderRadius: "100px",
        },
        // Drawer css
        ".customDrawer": {
          ".MuiPaper-root": {
            backgroundColor: palette.secondary.main,
          },
          ".MuiBackdrop-root": {
            backdropFilter: "blur(3px)",
            backgroundColor: alpha(palette.primary.dark, 0.3),
          },
        },
        ".MobileLogo": {
          margin: "32px 0px 40px 20px",
        },
        ".MobileMenuItems": {
          ".MuiButtonBase-root": {
            padding: "20px",
          },
          ".accountPreferencesUrl": {
            fontSize: "14px",
            lineHeight: "24px",
          },
          ".SignOutUrl": {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "600",
          },
        },
        ".MainLinksContainer": {
          "@media (max-width:767px)": {
            paddingBottom: "30px",
          },
        },
        ".IconContent": {
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
          ".NumberWrap": {
            fontSize: "12px",
            lineHeight: "24px",
            marginLeft: "8px",
          },
          ".CircleIcon": {
            width: "8px",
            height: "8px",
            borderRadius: " 100%",
            backgroundColor: palette.primary.dark,
            marginLeft: "0",
            marginRight: "12px",
          },
        },
        ".MessageBtnWrap": {
          marginRight: "22px",
          button: {
            padding: "0",
            backgroundColor: "transparent",
          },
        },
        ".logoBtnWrapperMain": {
          "@media (max-width:767px)": {
            width: "100%",
            marginLeft: "0",
            ".logoBtnWrapper": {
              maxWidth: "100%",
              flex: "0 0 100%",
              paddingRight: "20px",
              display: "flex",
              justifyContent: "space-between",
            },
          },
          ".MobileMessageIcon": {
            display: "none",
            "@media (max-width:767px)": {
              display: "block",
            },
          },
        },
        // Tag styles
        ".status": {
          fontSize: "14px",
          lineHeight: "14px",
          padding: "2.5px",
          display: "inline-block",
          textTransform: "initial",
          "&.success": {
            background: palette.success.light,
            border: `1px solid ${palette.success.main}`,
          },
          "&.warning": {
            background: alpha(palette.warning.main, 0.2),
            border: `1px solid ${palette.warning.main}`,
          },
          "@media(max-width:767px)": {
            fontSize: "13px",
          },
        },
        ".AcccordionWrapper": {
          marginBottom: "32px",
          "@media (max-width:992px)": {
            marginBottom: "24px",
          },
          "@media (max-width:767px)": {
            ".MuiAccordionSummary-content": {
              textAlign: "center",
              margin: "20.5px 0",
            },
          },
        },
        // Main Style Responsive
        "@media (max-width:1440px)": {
          ".LeftMainCol": {
            maxWidth: "288px",
            flex: "0 0 288px",
          },
          ".RightMainCol": {
            maxWidth: "calc(100% - 288px)",
            flex: "0 0 calc(100% - 288px)",
          },
        },
        "@media (max-width:992px)": {
          ".LeftMainCol": {
            maxWidth: "100%",
            flex: "0 0 100%",
          },
          ".RightMainCol": {
            maxWidth: "calc(100%)",
            flex: "0 0 calc(100%)",
          },
          ".contentWrapper .MuiGrid-grid-xs-3 .menuItems .MuiListItemButton-root":
            {
              marginRight: "36px",
            },
        },
      }}
    />
  );

  return inputGlobalStyles;
}
