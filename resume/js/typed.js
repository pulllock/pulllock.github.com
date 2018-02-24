// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // div containing strings
        this.stringsElement = this.options.stringsElement;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.strings)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i=0;i<self.strings.length;++i) self.sequence[i]="i;" shuffle="" the="" array="" if="" true="" if(self.shuffle)="" self.sequence="self.shuffleArray(self.sequence);" start="" typing="" self.typewrite(self.strings[self.sequence[self.arraypos]],="" self.strpos);="" },="" self.startdelay);="" }="" ,="" build:="" function()="" {="" var="" self="this;" insert="" cursor="" (this.showcursor="==" true)="" this.cursor="$("<span" class="\"typed-cursor\"">" + this.cursorChar + "");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                self.strings = [];
                this.stringsElement.hide();
                var strings = this.stringsElement.find('p');
                $.each(strings, function(key, value){
                    self.strings.push($(value).html());
                });
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' ||="" curchar="==" '&')="" {="" var="" tag="" ;="" endtag="" if="" (curchar="==" '<')="" }="" else="" while="" (curstring.substr(curstrpos).charat(0)="" !="=" endtag)="" +="curString.substr(curStrPos).charAt(0);" curstrpos++;="" timeout="" for="" any="" pause="" after="" a="" character="" self.timeout="setTimeout(function()" (curstrpos="==" curstring.length)="" fires="" callback="" function="" self.options.onstringtyped(self.arraypos);="" is="" this="" the="" final="" string="" (self.arraypos="==" self.strings.length="" -="" 1)="" animation="" that="" occurs="" on="" last="" typed="" self.options.callback();="" self.curloop++;="" quit="" we="" wont="" loop back="" (self.loop="==" false="" self.curloop="==" self.loopcount)="" return;="" self.backspace(curstring,="" curstrpos);="" },="" self.backdelay);="" *="" call="" before="" functions="" applicable="" 0)="" self.options.prestringtyped(self.arraypos);="" start="" typing="" each="" new="" char="" into="" existing="" curstring:="" arg,="" self.el.html:="" original="" text="" inside="" element="" nextstring="curString.substr(0," curstrpos="" 1);="" (self.attr)="" self.el.attr(self.attr,="" nextstring);="" (self.isinput)="" self.el.val(nextstring);="" (self.contenttype="==" 'html')="" self.el.html(nextstring);="" self.el.text(nextstring);="" add="" characters="" one="" by="" self.typewrite(curstring,="" end="" of="" charpause);="" humanized="" value="" humanize);="" ,="" backspace:="" function(curstring,="" curstrpos)="" exit="" when="" stopped="" (this.stop="==" true)="" varying="" values="" settimeout="" during="" can't="" be="" global="" since="" number="" changes="" time="" executed="" humanize="Math.round(Math.random()" (100="" 30))="" this.backspeed;="" self="this;" -----="" part="" optional="" check="" array="" position="" first="" string,="" only="" delete="" word="" stopnum="" actually="" represents="" amount="" chars="" to="" keep="" in="" current="" string.="" my="" case="" it's="" 14.="" 1){="" self.stopnum="14;" every="" other="" time,="" whole="" else{="" skip="" over="" html="" tags="" backspacing="" '="">') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {="" tag="" -="curString.substr(curStrPos).charAt(0);" curstrpos--;="" }="" +="<" ;="" -----="" continue="" important="" stuff="" replace="" text="" with="" base="" typed="" characters="" var="" nextstring="curString.substr(0," curstrpos);="" if="" (self.attr)="" self.el.attr(self.attr,="" nextstring);="" else="" (self.isinput)="" self.el.val(nextstring);="" (self.contenttype="==" 'html')="" self.el.html(nextstring);="" self.el.text(nextstring);="" the="" number="" (id="" of="" character="" in="" current="" string)="" is="" less="" than="" stop="" number,="" keep="" going="" (curstrpos=""> self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopnum)="" {="" self.arraypos++;="" if="" (self.arraypos="==" self.strings.length)="" self.arraypos="0;" shuffle="" sequence="" again="" if(self.shuffle)="" self.sequence="self.shuffleArray(self.sequence);" self.init();="" }="" else="" self.typewrite(self.strings[self.sequence[self.arraypos]],="" curstrpos);="" humanized="" value="" for="" typing="" },="" humanize);="" **="" *="" shuffles="" the="" numbers="" in="" given="" array.="" @param="" {array}="" array="" @returns="" ,shufflearray:="" function(array)="" var="" tmp,="" current,="" top="array.length;" if(top)="" while(--top)="" current="Math.floor(Math.random()" (top="" +="" 1));="" tmp="array[current];" array[current]="array[top];" array[top]="tmp;" return="" array;="" start="" &="" stop="" currently="" not="" working="" ,="" stop:="" function()="" self="this;" self.stop="true;" clearinterval(self.timeout);="" start:="" if(self.stop="==" false)="" return;="" this.stop="false;" this.init();="" reset="" and="" rebuild="" element="" reset:="" id="this.el.attr('id');" this.el.after('<span="">')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);</=></')></'></self.strings.length;++i)>