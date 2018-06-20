( function() {
  console.log('hello?');
    tinymce.PluginManager.add( 'contentcards', function( editor, url ) {
        editor.addButton( 'contentcards_shortcode', {
            image: contentcards.icon,
            onclick: function() {
                var win = editor.windowManager.open( {
                    title: contentcards.texts.add_dialog_title,
                    bodyType: 'tabpanel',
                    body: [{
                        type: 'form',
                        title: contentcards.texts.main_label,
                        items: [{
                            type: 'textbox',
                            name: 'url',
                            label: contentcards.texts.link_label,
                        },
                        {
                          type: 'textbox',
                          name: 'custom_title',
                          label: contentcards.texts.c_title,
                        },
                        {
                          type: 'textbox',
                          multiline: 'true',
                          name: 'custom_description',
                          label: contentcards.texts.c_description,
                          file_browser_callback: 'https://www.tinymce.com/docs-3x/howto/TinyMCE3x@How-to_implement_a_custom_file_browser/',
                        },
                        {
                            type: 'checkbox',
                            name: 'target',
                            label: contentcards.texts.target_label,
                            text: contentcards.texts.target_text,
                            checked:false
                        }
                        ],
                    },{
                        type: 'form',
                        title: contentcards.texts.advanced_label,
                        items: [{
                            type: 'textbox',
                            name: 'class',
                            label: contentcards.texts.class_label,
                        },{
                            type: 'textbox',
                            name: 'word_limit',
                            label: contentcards.texts.wordlimit_label,
                        }
                        ],
                    }],
                    onsubmit: function( e ) {
                        var result = win.toJSON();
                        var atts = '';
                        for ( var key in result ) {
                            if ( !result[key] ) {
                                continue;
                            }
                            if ( 'target' === key ) {
                                result[key] = '_blank';
                            }
                            atts += ' ' + key  + '="' + result[key] + '"';
                        }
                        editor.insertContent( '[contentcards' + atts + '] ' );
                    }
                } );
            }
        } );
    } );
} )();
