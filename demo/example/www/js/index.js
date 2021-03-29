/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("startchat").addEventListener("click", startChat);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function startChat() {
    let url = "" // Sanar Chat URL with SANAR_TOKEN
    if(!url) {
        alert("Request Sanar Url");
        return
    }
    SafariViewController.isAvailable(function (available) {
        if (available) {
            SafariViewController.show({
                url: url,
                hidden: false, // default false
                animated: true, // default true, note that 'hide' will reuse this preference (the 'Done' button will always animate though)
                transition: 'curl', // unless animated is false you can choose from: curl, flip, fade, slide (default)
                enterReaderModeIfAvailable: true
            },
                function (result) {
                    if (result.event === 'opened') {
                        console.log('opened');
                    } else if (result.event === 'loaded') {
                        console.log('loaded');
                    } else if (result.event === 'closed') {
                        console.log('closed');
                        // call disconnect here
                    }
                },
                function (msg) {
                    console.log("KO: " + JSON.stringify(msg));
                })
        } else {
            // potentially powered by InAppBrowser because that (currently) clobbers window.open
            window.open(url /*, '_blank', 'location=yes'*/);
        }
    })
}
