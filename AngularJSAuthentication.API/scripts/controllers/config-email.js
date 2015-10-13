/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 *
 *
 * For email editing
 */

CKEDITOR.editorConfig = function( config ) {

	config.skin = 'pardot';
    config.language = 'en';
	config.uiColor = '#ffffff';
	config.toolbarCanCollapse = true;

	config.extraPlugins = 'autogrow,pilink,piimage,piaddthis,pidynamiccontent,piemailfield,piformat,codemirror,imagebrowser,jqueryspellchecker,tableresize';
	config.autoGrow_onStartup = true;

	config.disableNativeSpellChecker = false;

	config.allowedContent = true;

	config.enterMode = 2;

	// Remove the Resize plugin as it does not make sense to use it in conjunction with the AutoGrow plugin.
	config.removePlugins = 'resize,link,image';

	config.toolbar = [
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'PiFormat', 'RemoveFormat' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align' ], items: [ 'NumberedList', 'BulletedList', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar', 'AddThis', 'DynamicContent', 'variablefield' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source' ] },
		'/',
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', groups: [ 'find', 'selection' ] },
		{ name: 'color', items: [ 'TextColor', 'BGColor'] },
		{ name: 'styles', items: [ 'Font', 'FontSize', 'Styles', 'Format' ] },
		{ name: 'others', items: [ '-' ] }
	];

};

/**
 * Override the default 'toolbarCollapse' command to hide
 * only toolbars in the row two and onwards.
 */
CKEDITOR.on('instanceReady', function(e) {

    function switchVisibilityAfter1stRow(toolbox, show)
    {
        var inFirstRow = true;
        var elements = toolbox.getChildren();
        var elementsCount = elements.count();
        var elementIndex = 0;
        var element = elements.getItem(elementIndex);
        for (; elementIndex < elementsCount; element = elements.getItem(++elementIndex)) {
            inFirstRow = inFirstRow && !(element.is('span') && element.hasClass('cke_toolbar_break'));

            if (!inFirstRow) {
                if (show) element.show(); else element.hide();
            }
        }
    }

    var editor = e.editor;
    var collapser = (function() {
        try {
            // We've HTML: td.cke_top {
            //  div.cke_toolbox {span.cke_toolbar, ... }
            //  , a.cke_toolbox_collapser }
            var firstToolbarId = editor.toolbox.toolbars[0].id;
            var firstToolbar = CKEDITOR.document.getById(firstToolbarId);
            var toolbox = firstToolbar.getParent();
            var collapser = toolbox.getNext();
            return collapser;
        }
        catch (e) {}
    })();

    // Copied from editor/_source/plugins/toolbar/plugin.js & modified
    editor.addCommand( 'toolbarCollapse',
    {

		    exec: function( editor ) {
					var collapser = editor.ui.space( 'toolbar_collapser' ),
						toolbox = collapser.getPrevious(),
						contents = editor.ui.space( 'contents' ),
						toolboxContainer = toolbox.getParent().getParent(),
						contentHeight = parseInt( contents.$.style.height, 10 ),
						previousHeight = toolboxContainer.$.offsetHeight,
						minClass = 'cke_toolbox_collapser_min',
						collapsed = collapser.hasClass( minClass );

					if ( !collapsed ) {
            switchVisibilityAfter1stRow(toolbox, false);    // toolbox.hide();
						collapser.addClass( 'iterate_tbx_hidden' );
						if (!toolbox.isVisible()) toolbox.show(); // necessary 1st time if initially collapsed
            collapser.addClass( 'cke_toolbox_collapser_min' );
						collapser.setAttribute( 'title', editor.lang.toolbar.toolbarExpand );
					} else {
            switchVisibilityAfter1stRow(toolbox, true);    // toolbox.show();
						collapser.removeClass( minClass );
						collapser.removeClass( 'cke_toolbox_collapser_min' );
						collapser.setAttribute( 'title', editor.lang.toolbar.toolbarCollapse );
					}

					// Update collapser symbol.
					collapser.getFirst().setText( collapsed ? '\u25B2' : // BLACK UP-POINTING TRIANGLE
					'\u25C0' ); // BLACK LEFT-POINTING TRIANGLE

					var dy = toolboxContainer.$.offsetHeight - previousHeight;
					contents.setStyle( 'height', ( contentHeight - dy ) + 'px' );

					editor.fire( 'resize' );
				},

        modes : {
            wysiwyg : 1,
            source : 1
        }
    } )

    // Make sure advanced toolbars initially collapsed
    // editor.execCommand( 'toolbarCollapse' );
});