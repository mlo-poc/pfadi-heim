            window.onload = function() {
                var path = window.location.pathname;
                if (path.endsWith('index.html')) {
                    path = path.substr(path, path.length - 'index.html'.length);
                }
                var url = 'https://play.wa.binary-kitchen.de/_/global/'+window.location.host+path+'lagerplatz.json';
                document.getElementById('mapLink').href = url;
            };
