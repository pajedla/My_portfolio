'use strict';

        document.addEventListener('DOMContentLoaded', function () {
            var simple           = document.querySelector('.js_simple');
            var percentage       = document.querySelector('.js_percentage');
            var rewind           = document.querySelector('.js_rewind');
            var rewind_percentage = document.querySelector('.js_rewind_percentage');
            var variableWidth    = document.querySelector('.js_variablewidth');
            var multiSlides      = document.querySelector('.js_multislides');
            var ease             = document.querySelector('.js_ease');
            var events           = document.querySelector('.js_events');

            lory(simple, {
                infinite: 1,
                enableMouseEvents: true
            });

            lory(percentage, {
                infinite: 1,
                enableMouseEvents: true
            });

            lory(rewind, {
                rewind: true,
                enableMouseEvents: true
            });

            lory(rewind_percentage, {
                rewind: true,
                enableMouseEvents: true
            });

            lory(variableWidth, {
                rewind: true,
                enableMouseEvents: true
            });

            lory(multiSlides, {
                infinite: 4,
                slidesToScroll: 4,
                enableMouseEvents: true
            });

            lory(ease, {
                infinite: 4,
                slidesToScroll: 4,
                slideSpeed: 300,
                ease: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
                enableMouseEvents: true
            });

            function handleEvent(e) {
                var newSpan = document.createElement('span');
                var time = new Date();
                time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ',' + time.getMilliseconds();
                var newContent = document.createTextNode('[' + time + '] Event dispatched: "' + e.type + '"');
                newSpan.appendChild(newContent);
                e.target.nextElementSibling.appendChild(newSpan);
            }

            events.addEventListener('before.lory.init', handleEvent);
            events.addEventListener('after.lory.init', handleEvent);
            events.addEventListener('before.lory.slide', handleEvent);
            events.addEventListener('after.lory.slide', handleEvent);

            events.addEventListener('on.lory.resize', handleEvent);
            events.addEventListener('on.lory.touchend', handleEvent);
            events.addEventListener('on.lory.touchmove', handleEvent);
            events.addEventListener('on.lory.touchstart', handleEvent);
            events.addEventListener('on.lory.destroy', handleEvent);

            lory(events, {
                infinite: 1
            });
        });