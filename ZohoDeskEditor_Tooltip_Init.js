function ZohoDeskEditor_Init() {}

ZohoDeskEditor_Init.init = function( cssPath , jsPath ,csrfParamName, csrfToken, hookToOrganize) {
    ZohoDeskEditor_Init.language = "en";
    ZohoDeskEditor_Init.useSameDomain = true;
    ZohoDeskEditor_Init.needplaintext = true;
    ZohoDeskEditor_Init.editorCSS = true;
    ZohoDeskEditor_Init.inlineQuotes = true;
    ZohoDeskEditor_Init.csrfCookieVal = csrfToken;
    ZohoDeskEditor_Init.csrfParamVal = csrfParamName;
    ZohoDeskEditor_Init.modeChange = undefined;
    ZohoDeskEditor_Init.spellcheckURL = 'lt.zoho.com';
    ZohoDeskEditor_Init.domain = document.domain;
    ZohoDeskEditor_Init.tabKeyHandling = true;
    ZohoDeskEditor_Init.needEditorFocus = true;
    ZohoDeskEditor_Init.removeInsertOptions = false;
    ZohoDeskEditor_Init.defaultFontSize = "10";
    ZohoDeskEditor_Init.defaultFontFamily = "Verdana,arial,Helvetica,sans-serif";
    ZohoDeskEditor_Init.contextVal = "support";
    ZohoDeskEditor_Init.maxiconpath = 3;
    ZohoDeskEditor_Init.dropDownTopPadding = 11;
    ZohoDeskEditor_Init.dropDownLeftPadding = 5;
    ZohoDeskEditor_Init.slidebarClass = "KB_Editor_DropDown_Slidebar";
    ZohoDeskEditor_Init.origin = window.location.origin;
    ZohoDeskEditor_Init.cssPath = cssPath;
    ZohoDeskEditor_Init.jsPath = jsPath;
    var agt = navigator.userAgent.toLowerCase();
    ZohoDeskEditor_Init.is_ie = (agt.indexOf("ie") !== -1);
    ZohoDeskEditor_Init.is_safari = (agt.indexOf("safari") !== -1);
    ZohoDeskEditor_Init.is_opera = (agt.indexOf("opera") !== -1);
    ZohoDeskEditor_Init.is_mac = (agt.indexOf("mac") !== -1);
    ZohoDeskEditor_Init.loading = true;
    if(document.getElementsByClassName("zohoDesk_toolTipEditor_css").length===0){
        ZohoDeskEditor_Init.loadURL(ZohoDeskEditor_Init.cssPath+"/ZohoDeskEditorTools.min.css", "css", "ZohoDeskCss");
    }

    ZohoDeskEditor_Init.toolbarOrder = [
        ["bold", "Bold (Ctrl+B)", "KBEditor-txtbold"],
        ["italic", "Italic (Ctrl+I)", "KBEditor-txtitalic"],
        ["underline", "Underline (Ctrl+U)", "KBEditor-txtunderline"],
        ["forecolor", "Font color", "KBEditor-clrpick"],
        /*["backcolor", "Background Color", "KBEditor-bgclr"],*/
        ["heading", "Heading", "KB_Editor_Bdr_div Text_Type"],
        ["fontSize", "Font Size", "KB_Editor_Bdr_div TextSize_Type"],
        ["alignoptions", "Align Text", "KBEditor-align-left"],
        ["listoptions", "List Options", "KBEditor-list-round"],
        
        /*["indentoptions", "Indent Options", "KBEditor-increaseindent"],
        ["attach", "Insert Image", "KBEditor-insertimage"],
        ["removeFormat", "Remove Formatting", "KBEditor-clr"],
        ["articlelink", "Insert Article Link", "KBEditor-linkarticle"],*/
        
        ["insertoptions", "Insert Options", "KB_Editor_Bdr_div Insert_Type"],
        /*["editorexpand", "Editor Expand", "KBEditor-expand"],*/
        ["styletext", "Style Text", "KBEditor-txtbgclr"],
        /*["plaintext", "Plain Text", "KB_Editor_PlainText KB_Editor_FullScreen"]*/
    ];

    ZohoDeskEditor_Init.heading = [{
            "htm": "Heading 1",
            "datAttr": "h1"
        },
        {
            "htm": "Heading 2",
            "datAttr": "h2"
        },
        {
            "htm": "Heading 3",
            "datAttr": "h3"
        },
        {
            "htm": "Normal",
            "datAttr": "div"
        }
    ];
    ZohoDeskEditor_Init.insertoptions = [{
            "htm": "Insert Link",
            "datAttr": "link",
            "iconClass": "KBEditor-insertlink"
        },
        {
            "htm": "Remove Link",
            "datAttr": "unlink",
            "iconClass": "KBEditor-removelink"
        },

        /*  {
              "htm": "Insert HTML",
              "datAttr": "object",
              "iconClass":"KBEditor-embed2"
          },
          {
        "htm" : "Edit HTML",
        "datAttr" : "edithtml",
        "iconClass":"KBEditor-embed2"
          }, 
          {
           "htm": "Insert Table",
              "datAttr": "table",
              "iconClass":"KBEditor-inserttable"
          },
          {
              "htm": "Insert Horizontal Rule",
              "datAttr": "inserthorizontalrule",
              "iconClass":"KBEditor-hr"
          },
          {
              "htm": "Insert Code",
              "datAttr": "code",
              "iconClass":"KBEditor-code"
          }
	*/
    ];
    ZohoDeskEditor_Init.align = [{
            "htm": "Align Left",
            "datAttr": "justifyleft",
            "iconClass": "KBEditor-align-left"
        },
        {
            "htm": "Align Right",
            "datAttr": "justifyright",
            "iconClass": "KBEditor-align-right"
        },
        {
            "htm": "Align Justify",
            "datAttr": "justifyfull",
            "iconClass": "KBEditor-align-justify"
        },
        {
            "htm": "Align Center",
            "datAttr": "justifycenter",
            "iconClass": "KBEditor-align-center"
        },
        {
            "htm": "RTL",
            "datAttr": "rtl",
            "iconClass": "KBEditor-align-right"
        },
    ];
    ZohoDeskEditor_Init.list = [{
            "htm": "Bullets",
            "datAttr": "insertunorderedlist",
            "iconClass": "KBEditor-list-round"
        },
        {
            "htm": "Numbering",
            "datAttr": "insertorderedlist",
            "iconClass": "KBEditor-list-number"
        }
    ];

    ZohoDeskEditor_Init.indent = [{
            "htm": "Increase Indent",
            "datAttr": "indent",
            "iconClass": "KBEditor-increaseindent"
        },
        {
            "htm": "Decrease Indent",
            "datAttr": "outdent",
            "iconClass": "KBEditor-increaseindent"
        }
    ];

    ZohoDeskEditor_Init.others = [{
            "htm": "Check Spelling",
            "datAttr": "spellcheck"
        },
        {
            "htm": "Plain Text Mode",
            "datAttr": "switchmode"
        }
    ];

    ZohoDeskEditor_Init.attachDrop = [{
            "clk": function(editor) {
                editor.uploadImage("load");
                if (ZohoDeskEditor_Init.needEditorStats) {
                    editor.updateCount("image");
                }
            },
            "htm": "Upload",
            "iconClass": "KBEditor-upload"
        },
        {
            "clk": function(editor) {
                editor.uploadImage("url");
                if (ZohoDeskEditor_Init.needEditorStats) {
                    editor.updateCount("image");
                }
            },
            "htm": "URL",
            "iconClass": "KBEditor-sphere"
        }
    ];

    ZohoDeskEditor_Init.fontSize = [{
            "htm": "8",
            "datAttr": "1"
        },
        {
            "htm": "10",
            "datAttr": "2"
        },
        {
            "htm": "12",
            "datAttr": "3"
        },
        {
            "htm": "14",
            "datAttr": "4"
        },
        {
            "htm": "18",
            "datAttr": "5"
        },
        {
            "htm": "24",
            "datAttr": "6"
        },
        {
            "htm": "36",
            "datAttr": "7"
        }
    ];
    var agt = navigator.userAgent.toLowerCase();
    ZohoDeskEditor_Init.is_ie = (agt.indexOf("ie") !== -1);
    ZohoDeskEditor_Init.is_safari = (agt.indexOf("safari") !== -1);
    ZohoDeskEditor_Init.is_opera = (agt.indexOf("opera") !== -1);
    ZohoDeskEditor_Init.is_mac = (agt.indexOf("mac") !== -1);
    ZohoDeskEditor_Init.loading = true;
};
ZohoDeskEditor_Init.loadURL = function(URL, type ,id) {
    var css,
        _script,
        _document = document;

    if(id && _document.getElementById(id)){
        return;
    }
    if (type === "css") {
        css = _document.createElement("link");
        css.type = 'text/css';
        css.rel = 'stylesheet';
        css.className="zohoDesk_toolTipEditor_css";
        css.href = URL;
        _document.getElementsByTagName("head")[0].appendChild(css);
    } else if (type === "js") {
        _script = _document.createElement("script");
        _script.type = "text/javascript";
        _script.src = URL;
        _document.getElementsByTagName("head")[0].appendChild(_script);
    }
};

//console.log("zohodesk_init file is loaded......");
// global.ZohoDeskEditor_Init = ZohoDeskEditor_Init;
