    function openSearch() {
        jQuery(".topNavContainer").addClass("searchActive");
    }
    jQuery(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
                $this = jQuery(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');
            //console.log(jQuery('.accordianSwitch').class());
            var classList = document.getElementById('accordianSwitch').className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'fa-chevron-down') {
                    jQuery('#accordianSwitch').removeClass('fa-chevron-down');
                    jQuery('#accordianSwitch').addClass('fa-chevron-up')
                } else {
                    jQuery('#accordianSwitch').removeClass('fa-chevron-up');
                    jQuery('#accordianSwitch').addClass('fa-chevron-down')
                }
            } 
            /* if (jQuery('.accoridanSwitch').hasClass('fa-chevron-down')) {
                
            } else if (jQuery('.accoridanSwitch').hasClass('fa-chevron-up')) {
                jQuery('.accoridanSwitch').removeClass('fa-chevron-up');
                jQuery('.accoridanSwitch').addClass('fa-chevron-down')
            } */
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }	

        var accordion = new Accordion(jQuery('#accordion'), false);
    });
    function querySt(ji) {

    hu = window.location.search.substring(1);
    gy = hu.split("&");

    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
    }
    
    
    function copyLinkShare(value) {
        var tempInput = document.createElement("input");
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = value;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Link Copied To Clipboard");
    }
    function printArticle() {
        var prtContent = document.getElementById("singlePostContainer");
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    }
