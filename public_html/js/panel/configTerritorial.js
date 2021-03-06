
window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: {gutters: 30},
    breakpoints: {
        wide: {range: '1200-', containers: 1140, grid: {gutters: 50}},
        narrow: {range: '960-1199', containers: 960},
        narrower: {range: '761-960', containers: 'fluid'},
        mobile: {range: '-760', containers: 'fluid', lockViewport: true, grid: {collapse: true, gutters: 20}}
    }
};

window._skel_panels_config = {
    panels: {
        leftPanel: {
            breakpoints: 'wide,narrow,narrower,mobile',
            position: 'left',
            size: 250,
            html: '<div data-action="moveCell" data-args="left-sidebar,content"></div>'
        },
        rightPanel: {
            breakpoints: 'wide,narrow,narrower,mobile',
            position: 'right',
            size: 250,
            html: '<div data-action="moveCell" data-args="right-sidebar,content"></div>'
        },
        bottomPanel: {
            position: 'bottom',
            size: 80
                    /*
                     Since this panel is a bit more complicated, we're omitting its 'html' option and
                     defining it inline (ie. in index.html).
                     */
        }
    },
    overlays: {
        titleBar: {
            breakpoints: 'mobile',
            position: 'top',
            width: '100%',
            height: 50,
            html: '<div data-action="copyHTML" data-args="title"></div>' +
                    '<div data-action="copyHTML" data-args="mapaSitio"></div>'
        },
        contactBar: {
            position: 'bottom-center',
            width: '100%',
            height: 50,
            html: '<a href="javascript:history.back();" class="icon-left"></a>' +
                    '<a href="#" class="toggle compartirT" data-action="togglePanel" data-args="bottomPanel"></a>' +
                    '<a href="javascript:history.forward();" class="icon-right"></a>'
        },
        leftPanelButton: {
            breakpoints: 'wide,narrow,narrower,mobile',
            position: 'top-left',
            width: 80,
            height: 60,
            html: '<div class="toggle" data-action="togglePanel" data-args="leftPanel"></div>'
        },
        rightPanelButton: {
            breakpoints: 'wide,narrow,narrower,mobile',
            position: 'top-right',
            width: 80,
            height: 60,
            html: '<div class="toggle icon-mysearch" data-action="togglePanel" data-args="rightPanel"></div>'
        }
    }
};