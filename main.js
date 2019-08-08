var RECORD_HEIGHT = 240;
var RECORD_WIDTH = 180;
var ROWS = 3;
var COLS = 7;
var LOAD_TIME = 3000;
var POSTER_SIZE = "w154";
var BACKDROP_SIZE = "w300";

var SORTS = [
    {"type": "year", "asc": false, "label": "Newest-Oldest Release Date"},
    {"type": "year", "asc": true, "label": "Oldest-Newset Release Date"},
    {"type": "alpha", "asc": true, "label": "A-Z Alphabetical"},
    {"type": "alpha", "asc": false, "label": "Z-A Alphabetical"},
    {"type": "rating", "asc": false, "label": "Highest-Lowest Rating"},
    {"type": "rating", "asc": true, "label": "Lowest-Highest Rating"}
];

var FILTERS = [
    {label: "Alphabetical:", type: "subalpha", heading: true},
    {label: "#-B", type: "alpha"},
    {label: "C-D", type: "alpha"},
    {label: "E-G", type: "alpha"},
    {label: "H-J", type: "alpha"},
    {label: "K-M", type: "alpha"},
    {label: "N-P", type: "alpha"},
    {label: "Q-S", type: "alpha"},
    {label: "T-Z", type: "alpha"},
    {label: "#", type: "subalpha", parent: "#-B"},
    {label: "A", type: "subalpha", parent: "#-B"},
    {label: "B", type: "subalpha", parent: "#-B"},
    {label: "C", type: "subalpha", parent: "C-D"},
    {label: "D", type: "subalpha", parent: "C-D"},
    {label: "E", type: "subalpha", parent: "E-G"},
    {label: "F", type: "subalpha", parent: "E-G"},
    {label: "G", type: "subalpha", parent: "E-G"},
    {label: "H", type: "subalpha", parent: "H-J"},
    {label: "I", type: "subalpha", parent: "H-J"},
    {label: "J", type: "subalpha", parent: "H-J"},
    {label: "K", type: "subalpha", parent: "K-M"},
    {label: "L", type: "subalpha", parent: "K-M"},
    {label: "M", type: "subalpha", parent: "K-M"},
    {label: "N", type: "subalpha", parent: "N-P"},
    {label: "O", type: "subalpha", parent: "N-P"},
    {label: "P", type: "subalpha", parent: "N-P"},
    {label: "Q", type: "subalpha", parent: "Q-S"},
    {label: "R", type: "subalpha", parent: "Q-S"},
    {label: "S", type: "subalpha", parent: "Q-S"},
    {label: "T", type: "subalpha", parent: "T-Z"},
    {label: "U", type: "subalpha", parent: "T-Z"},
    {label: "V", type: "subalpha", parent: "T-Z"},
    {label: "W", type: "subalpha", parent: "T-Z"},
    {label: "X", type: "subalpha", parent: "T-Z"},
    {label: "Y", type: "subalpha", parent: "T-Z"},
    {label: "Z", type: "subalpha", parent: "T-Z"},
    {label: "Rating:", type: "subrating", heading: true},
    {label: "3+", type: "rating"},
    {label: "3.5+", type: "rating"},
    {label: "4+", type: "rating"},
    {label: "4.5+", type: "rating"},
    {label: "5.0", type: "subrating", parent: "4.5+"},
    {label: "4.9", type: "subrating", parent: "4.5+"},
    {label: "4.8", type: "subrating", parent: "4.5+"},
    {label: "4.7", type: "subrating", parent: "4.5+"},
    {label: "4.6", type: "subrating", parent: "4.5+"},
    {label: "4.5", type: "subrating", parent: "4.5+"},
    {label: "4.4", type: "subrating", parent: "4+"},
    {label: "4.3", type: "subrating", parent: "4+"},
    {label: "4.2", type: "subrating", parent: "4+"},
    {label: "4.1", type: "subrating", parent: "4+"},
    {label: "4.0", type: "subrating", parent: "4+"},
    {label: "3.9", type: "subrating", parent: "3.5+"},
    {label: "3.8", type: "subrating", parent: "3.5+"},
    {label: "3.7", type: "subrating", parent: "3.5+"},
    {label: "3.6", type: "subrating", parent: "3.5+"},
    {label: "3.5", type: "subrating", parent: "3.5+"},
    {label: "3.4", type: "subrating", parent: "3+"},
    {label: "3.3", type: "subrating", parent: "3+"},
    {label: "3.2", type: "subrating", parent: "3+"},
    {label: "3.1", type: "subrating", parent: "3+"},
    {label: "3.0", type: "subrating", parent: "3+"},
    {label: "Year:", type: "subyear", heading: true},
    {label: "2010's", type: "year"},
    {label: "2000's", type: "year"},
    {label: "1990's", type: "year"},
    {label: "1980's", type: "year"},
    {label: "1970's-", type: "year"}
];

for(var y = 2020; y = y-1;){
    if(y<=1979){
        break;
    }
    var parent = y.toString();
    parent = parent.substring(0, parent.length-1) + "0's";
    FILTERS.push({label: y.toString(), type: "subyear", parent: parent});
}
FILTERS.push.apply(FILTERS, [
    {label: "1970's", type: "subyear", parent: "1970's-"},
    {label: "1960's", type: "subyear", parent: "1970's-"},
    {label: "1950's", type: "subyear", parent: "1970's-"},
    {label: "1940's-", type: "subyear", parent: "1970's-"}
]);
FILTERS.push.apply(FILTERS, [
    {label: "Genre:", type: "header", heading: true},
    {label: "TV", type: "genres", multi: true},
    {label: "TV Movie", type: "genres", multi: true},
    {label: "Action", type: "genres", multi: true},
    {label: "Adventure", type: "genres", multi: true},
    {label: "Animation", type: "genres", multi: true},
    {label: "Comedy", type: "genres", multi: true},
    {label: "Crime", type: "genres", multi: true},
    {label: "Documentary", type: "genres", multi: true},
    {label: "Drama", type: "genres", multi: true},
    {label: "Family", type: "genres", multi: true},
    {label: "Fantasy", type: "genres", multi: true},
    {label: "History", type: "genres", multi: true},
    {label: "Horror", type: "genres", multi: true},
    {label: "Music", type: "genres", multi: true},
    {label: "Mystery", type: "genres", multi: true},
    {label: "Romance", type: "genres", multi: true},
    {label: "Science Fiction", type: "genres", multi: true},
    {label: "Thriller", type: "genres", multi: true},
    {label: "War", type: "genres", multi: true},
    {label: "Western", type: "genres", multi: true}
]);

function viewModel() {
    var self = this;

    this.sort = ko.observable(SORTS[0]);
    this.divisions = ko.observableArray([]);
    this.subdivisions = ko.observableArray([]);
    this.filters = ko.observableArray([]);
    this.allfilters = ko.observableArray(FILTERS);
    this.search = ko.observable('');
    this.play = ko.observable(false);
    this.selectedMovie = ko.observable(null);
    this.scrollTop = ko.observable(0);
    this.activeSection = ko.observable('');
    self.activeSubSection = ko.observable('');

    this.base_url = "http://image.tmdb.org/t/p/";
    this.poster_size = POSTER_SIZE;
    this.backdrop_size = BACKDROP_SIZE;
    this.movies = ko.observableArray([]);
    this.bodyWidth = ko.observable(0);
    this.totalCount = ko.observable(0);
    this.type = ko.observable('slideindex');
    this.inscroll = ko.observable(true);
    this.row = ko.observable(3);

    this.sliderHeight = ko.observable(24);
    this.slideIndexVisible = ko.observable(false);

    this.page = ko.observable(1);
    this.bodyHeight = ko.observable(0);

    this.play.subscribe(function(val){
        if(val){
            if(!val.trailer){
                var movie = self.getFullMovie(val.id);
                self.selectedMovie(movie);
                val = movie;
            }
            if(val.trailer){
                var trailer = val.trailer.split("?")[0];
                trailer = trailer.split("&")[0];
                $('.playtrailer').html('<iframe src="//www.youtube.com/embed/'+trailer+'?autoplay=1&autohide=1&fs=1" frameborder="0" width="'+$(window).width()+'" height="'+$(window).height()+' frameborder="0" allowfullscreen="true"></iframe>');
                $('.playtrailer').addClass("visible");

                $(window).on("blur.videopopup", function(){
                    setTimeout(function(){
                        $(window).focus();
                    },500);
                });

                $(window).on("keydown.videopopup", function(e) {
                    if(e.keyCode === 27){
                        self.play(false);
                    }
                });
            }
        }else{
            self.selectedMovie(null);
            $(window).off('.videopopup');
            $('.playtrailer').removeClass("visible");
            $('.playtrailer').html('');
        }
    })

    this.getFilterVisible = function(obj){
        if(obj.multi){
            for(var f in self.filters()){
                if(self.filters()[f].label === obj.label){
                    return false;
                }
            }
            return true;
        }
        for(var f in self.filters()){
            if(self.filters()[f].type === obj.type){
                return false;
            }
        }
        if(obj.parent){
            for(var f in self.filters()){
                if(self.filters()[f].label === obj.parent){
                    return true;
                }
            }
            return false;
        }

        return true;
    }

    this.getFullMovie = function(id) {
        var contents = this.db.exec("SELECT * FROM movies WHERE id = " + id);
        var movie = {};
        for(var c in contents[0].columns){
            movie[contents[0].columns[c]] = contents[0].values[0][c];
        }
        movie.title = movie.title.replace(/\\'/g,"'").replace(/\\"/g,"\"");
        movie.overview = movie.overview.replace(/\\'/g,"'").replace(/\\"/g,"\"");

        return movie;
    }

    this.loadData = function(start, count, startrow) {
        $('.loading_overlay').show();
        var row = startrow;
        var col = 0;

        var sort = "UPPER(sort_title)";
        switch(this.sort().type){
            case "alpha":
                sort = "UPPER(sort_title)";
                break;
            case "year":
                sort = "release_date";
                break;
            case "rating":
                sort = "vote_average";
                break;                
        }
        var sort_dir = this.sort().asc ? "asc" : "desc";

        this.last_start = start;
        this.last_count = count;

        var contents = null; 
        var filt = "";
        if(this.filters().length){
            filt = filt + " WHERE ";
            for(var f in this.filters()){
                if(this.filters()[f].multi){
                    filt = filt + this.filters()[f].type + ' LIKE "%' + this.filters()[f].label + '%" AND ';
                }else{
                    filt = filt + this.filters()[f].type + ' = "' + this.filters()[f].label + '" AND ';
                }
            }
            filt = filt.substr(0, filt.length-5);
        }
        var q = "SELECT id,poster FROM movies" + filt + " ORDER BY " + sort + " " + sort_dir + " LIMIT " + start + ", " + count;
        contents = this.db.exec(q);

        var movies = [];
        if(contents && contents[0]){
            for(var v in contents[0].values){
                var movie = {};
                for(var c in contents[0].columns){
                    movie[contents[0].columns[c]] = contents[0].values[v][c];
                }
                movie.top = row * RECORD_HEIGHT;
                movie.left = col * RECORD_WIDTH;
                movie.first = col === 0;
                movie.last = col === (COLS-1);
                if(self.selectedMovie() && movie.id === self.selectedMovie().id){
                    movie = $.extend({}, movie, self.selectedMovie());
                }

                col = col +1;
                if(col > (COLS-1)){
                    col = 0;
                    row = row + 1;
                }
                movies.push(movie);
            }
        }
        $('.loading_overlay').hide();
        return movies;
    }

    this.getTotalCount = function() {
        var contents = null;
        var filt = "";
        if(this.filters().length){
            filt = filt + " WHERE ";
            for(var f in this.filters()){
                if(this.filters()[f].multi){
                    filt = filt + this.filters()[f].type + ' LIKE "%' + this.filters()[f].label + '%" AND ';
                }else{
                    filt = filt + this.filters()[f].type + ' = "' + this.filters()[f].label + '" AND ';
                }
            }
            filt = filt.substr(0, filt.length-5);
        }
        
        var q = "SELECT Count(*) FROM movies" + filt;
        contents = this.db.exec(q);

        this.totalCount((contents && contents[0]) ? contents[0].values[0] : 0);
        this.bodyWidth((RECORD_WIDTH*COLS)-24);
        if(this.type()==='jit' || this.type()==='slideindex'){
            this.bodyHeight((Math.ceil(this.totalCount()/COLS)*RECORD_HEIGHT));
            if(this.type()==='slideindex'){
                var height = Math.ceil($('.body').height()*($('.body').height()/this.bodyHeight()));
                if(height<24){ height = 24; }
                this.sliderHeight(height);

                var divs = [];
                var contents = null;

                var f = "";
                if(this.filters().length){
                    
                    filt = " WHERE ";
                    for(var f in this.filters()){
                        if(this.filters()[f].multi){
                            filt = filt + this.filters()[f].type + ' LIKE "%' + this.filters()[f].label + '%" AND ';
                        }else{
                            filt = filt + this.filters()[f].type + ' = "' + this.filters()[f].label + '" AND ';
                        }
                    }
                    filt = filt.substr(0, filt.length-5);
                }

                var sid = this.sort().type;
                var subid = "sub"+this.sort().type;
                var isSub = false;
                for(var f in this.filters()){
                    if(!this.filters()[f].multi && this.filters()[f].type ===this.sort().type){
                        sid = "sub"+this.sort().type;
                        isSub = true;
                        break;
                    }
                }
                
                var q = "SELECT "+sid+", count("+sid+") FROM movies" + filt + " GROUP BY "+sid+" ORDER BY " + sid + " " + (this.sort().asc ? 'asc' : 'desc' );
                contents = this.db.exec(q);

                if(contents && contents[0]){
                    for(var v in contents[0].values){
                        for(var w in FILTERS){
                            if(FILTERS[w].label === contents[0].values[v][0]){
                                var filter = $.extend({}, FILTERS[w]);
                                filter.count = contents[0].values[v][1];
                                divs.push(filter);
                            }
                        }
                    }
                }
                self.divisions(divs);

                if (!isSub) {
                    var subdivs = [];
                    var q2 = "SELECT "+subid+", count("+subid+") FROM movies" + filt + " GROUP BY "+subid+" ORDER BY " + subid + " " + (this.sort().asc ? 'asc' : 'desc' );
                    var contents2 = this.db.exec(q2);

                    if(contents2 && contents2[0]){
                        for(var v in contents2[0].values){
                            var found = false;
                            for(var w in FILTERS){
                                if(FILTERS[w].label === contents2[0].values[v][0]){
                                    var filter = $.extend({}, FILTERS[w]);
                                    filter.count = contents2[0].values[v][1];
                                    subdivs.push(filter);
                                    found = true;
                                }
                            }
                            if (!found) {
                                subdivs.push({label: contents2[0].values[v][0], count: contents2[0].values[v][1], notselectable: true})
                            }
                        }
                    }
                    self.subdivisions(subdivs);
                }
                else {
                    self.subdivisions([]);
                }

                self.setActiveSection(($('.body').scrollTop()/self.bodyHeight())*100);
            }
        }else{
            this.bodyHeight((ROWS*RECORD_HEIGHT));
        }
    }

    this.searchEnterKey = function(obj,e){ 
        if(e.keyCode===13){ 
            self.addSearchFilter(); 
        } 
        return true; 
    }

    this.addSearchFilter = function(){
        if(!self.search()){
            return;
        }
        var obj = {label: self.search(), type: "UPPER(title)", multi: true, search: true};
        for(var f in self.filters()){
            if(self.filters()[f]===obj){
                return;
            }
        }
        self.addFilter(obj);
        self.search('');
    }

    this.addFilter = function(obj){
        if(obj.heading){
            return;
        }
        self.filters.push(obj);

        $('.body').scrollTop(0);
        $('.slider').css('top',0);
        self.getTotalCount();
        if(self.type()==='pager'){
            self.page(0);
        }else if(self.type()==='infinite'){
            ROWS = Math.ceil($(window).height()/RECORD_HEIGHT) + 1;
            self.row(ROWS);
            $('.body').scrollTop(0);
            var movies = self.loadData(0,(ROWS*COLS), 0);
            self.movies(movies);
        }else{
            self.doScroll({ scrollTop: 0 });
        }
    }

    this.goToFilter = function(obj){
        var top = 0;
        for(var x in self.subdivisions()) {
            if(self.subdivisions()[x] === obj) {
                break;
            }
            top = top + Math.floor((self.subdivisions()[x].count * RECORD_HEIGHT) / COLS);
        }
        if (top > 0) {
            var r = Math.ceil($(window).height()/RECORD_HEIGHT) + 1;
            top = top + (RECORD_HEIGHT * ROWS);
        }
        self.lastElem = { scrollTop: top};
        $('.body').scrollTop(top);
        var pcttop = (top/self.bodyHeight())*100;
        $('.slider').css('top',pcttop+'%');
        self.doScroll(self.lastElem);
    }

    this.deleteFilter = function(obj){
        var newfilts = ko.utils.arrayFilter(self.filters(), function(item) {
            return obj.label !== item.label && obj.label !== item.parent;
        });
        self.filters(newfilts);

        $('.body').scrollTop(0);
        $('.slider').css('top',0);

        self.getTotalCount();
        if(self.type()==='pager'){
            self.page(0);
        }else if(self.type()==='infinite'){
            ROWS = Math.ceil($(window).height()/RECORD_HEIGHT) + 1;
            self.row(ROWS);
            $('.body').scrollTop(0);
            var movies = self.loadData(0,(ROWS*COLS), 0);
            self.movies(movies);
        }else{
            if(!self.lastElem){
                self.lastElem = { scrollTop: 0 };
            }
            self.doScroll(self.lastElem);
        }
    }

    this.scrollBody = function(obj, e){
        var threshold = self.bodyHeight() * ($('.body').height() / self.bodyHeight());
        if (self.bodyTop > $('.body').scrollTop() + threshold || self.bodyTop < $('.body').scrollTop() - threshold) {
            self.top = null;
            clearTimeout(self.longpress);
        }
        self.doScroll($(e.target)[0]);

        return true;
    };

    this.doScroll = function(elem){
        if(self.loading){ return; }
        if(self.type()==='infinite'){
            self.inscroll(true);
            if (elem.scrollTop >= (elem.scrollHeight - elem.offsetHeight - RECORD_HEIGHT - 200)) {
                self.row(self.row()+1);
                self.bodyHeight((self.row()*RECORD_HEIGHT)-40);

                self.loading = true;
                setTimeout(function(){
                    self.movies.valueWillMutate();
                    var movies = self.loadData(((self.row()-1)*COLS),COLS, self.row()-1);
                    self.movies(self.movies().concat(movies));
                    self.movies.valueHasMutated();
                    self.loading = false;
                    if(self.loadtimeout){
                        clearTimeout(self.loadtimeout);
                    }
                    self.loadtimeout = setTimeout(function(){
                        self.inscroll(false);
                    },LOAD_TIME);
                }, 200);
            }
        }
        if(self.type()==='jit' || self.type()==='slideindex'){
            self.inscroll(true);
            if(self.delay){
                clearTimeout(self.delay);
            }
            self.delay = setTimeout(function(){
                self.lastElem = elem;
                self.delay = null;
                var startrow = Math.floor(elem.scrollTop/RECORD_HEIGHT)-1;
                if(startrow<0){
                    startrow = 0;
                }
                var toprow = startrow + ROWS;
                self.movies.valueWillMutate();
                var movies = self.loadData(startrow*COLS,(ROWS*COLS), startrow);
                self.movies(movies);
                self.movies.valueHasMutated();
                if(self.loadtimeout){
                    clearTimeout(self.loadtimeout);
                }
                self.loadtimeout = setTimeout(function(){
                    self.inscroll(false);
                },LOAD_TIME);
            }, 200);
        }

        self.setActiveSection(($('.body').scrollTop()/self.bodyHeight())*100);
    };

    this.scrollStart = function(obj, e) {
        if (e.button !== 0) {
            return;
        }
        if (e.pageX > ($(window).width() - 50)) {
            var pct = (e.pageY - 60) / $('.body').height();

            self.bodyTop = $('.body').scrollTop();
            self.top = self.bodyHeight() * pct;
            if (!self.longpress) {
                self.longpress = setTimeout(function(){
                    self.setActiveSection((self.top/self.bodyHeight())*100);
                    self.clickActiveSection();

                    self.top = null;
                }, 250);
            }
            else {
                self.longpress = null;
            }

        }
        else {
            self.top = null;
        }

        return true;
    };

    this.touchScrollStart = function(obj, e) {
        self.scrollStart(null, {pageX: e.originalEvent.touches[0].pageX, pageY: e.originalEvent.touches[0].pageY, button: 0});

        return true;
    };

    this.scrollEnd = function(obj, e) {
        clearTimeout(self.longpress);
        self.longpress = null;
        if (self.top) {
            $('.body').scrollTop(self.top);

            self.top = null;
        }

        return true;
    };

    this.contentOver = function(obj,e){
        var item = $(e.target)[0];
        if(!$(e.target).hasClass('overview')){
            item = $(e.target).parents('.overview')[0];
        }
        if(item.scrollHeight>item.offsetHeight){
            self.contentHover = true;
        }
    };
    this.contentOut = function(obj,e){
        self.contentHover = false;
    };

    this.clickActiveSection = function(){
        if (self.divisions().length === 1) {
            return;
        }
        self.addFilter(self.activeSection());
    };

    this.clickActiveSubSection = function(){
        if (self.divisions().length === 1) {
            return;
        }
        if (self.activeSubSection()) {
            var activeSubSection = self.activeSubSection();
            self.addFilter(self.activeSection());
            if (activeSubSection !== self.activeSubSection()) {
                self.addFilter(activeSubSection);
            }
        }
        else {
            this.clickActiveSection();
        }
    };

    this.setActiveSection = function(top){
        self.scrollTop(top);

        $('.separator').children().each(function() {
            if(top < parseFloat(this.style.top)) {
                return false;
            }
            self.activeSection(ko.dataFor(this));
        });

        if (self.subdivisions().length) {
            var topPcts = 0;
            for(var x in self.subdivisions()) {
                topPcts = topPcts + (self.subdivisions()[x].count/self.totalCount()*100);
                if(top < topPcts) {
                    self.activeSubSection(self.subdivisions()[x]);
                    break;
                }
            }
        }
        else {
            self.activeSubSection(null);
        }
    };

    this.getTop = function(index){
        var add = 0;
        for(var x=0; x<index; x++){
            add = add + self.divisions()[x].count;
        }
        return ((add/this.totalCount())*100) + '%';
    }

    this.showMovie = function(obj,e){
        var lastId = self.selectedMovie() ? self.selectedMovie().id : null;
        self.selectedMovie(null);
        if (obj.id !== lastId) {
            var me = $(e.target);
            var movie = self.getFullMovie(obj.id);
            var newMovie = $.extend({}, obj, movie);
            newMovie.ratingpct = (newMovie.vote_average / 8)*100;
            if(newMovie.ratingpct>100){ newMovie.ratingpct = 100; }
            self.movies.replace(obj, newMovie);
            setTimeout(function(){
                self.selectedMovie(newMovie);
            }, 0);
        }
        e.stopPropagation();
    }

    this.hideMovie = function(obj, e){
        self.selectedMovie(null);
    }

    this.movies.subscribe(function(){
        self.writeHash();
    });

    switch(window.location.search){
        case "?pager":
            this.type('pager');
            break;
        case "?infinite":
            this.type('infinite');
            break;
        case "?jit":
            this.type('jit');
            break;
        case "?slideindex":
            this.type('slideindex');
            break;
    }

    this.page.subscribe(function(){
        self.inscroll(true);
        if(isNaN(self.page())){
            self.page(1);
        }
        if(self.page()<1){
            self.page(1);
        }
        if(self.page()>(Math.ceil(self.totalCount()/(ROWS*COLS)))){
            self.page(Math.ceil(self.totalCount()/(ROWS*COLS)));
        }
        self.row(1);
        var movies = self.loadData((self.page()-1)*(ROWS*COLS),(ROWS*COLS), 0);
        self.movies(movies);
        self.loadtimeout = setTimeout(function(){
            self.inscroll(false);
        },LOAD_TIME);  
    });

    this.setSort = function(obj){
        self.sort(obj);
        
        switch(self.type()){
            case 'pager':
                ROWS = Math.ceil($(window).height()/RECORD_HEIGHT);
                self.row(ROWS);
                self.page.valueHasMutated();
                break;
            case 'infinite':
                ROWS = Math.ceil($(window).height()/RECORD_HEIGHT) + 1;
                self.row(ROWS);
                $('.body').scrollTop(0);
                var movies = self.loadData(0,(ROWS*COLS), 0);
                self.movies(movies);
            case 'jit':
            case 'slideindex':
                if(!self.lastElem){
                    self.lastElem = { scrollTop: 0 };
                }
                self.getTotalCount();
                self.doScroll(self.lastElem);
                break;
        }
    }

    this.writeHash = function(){
        var hash = "";
        switch(self.type()){
            case 'pager':
                hash = 'page=' + self.page();
                break;
            case 'jit':
            case 'slideindex':
                if(self.lastElem && self.lastElem.scrollTop!==0){
                    hash = 'top=' + self.lastElem.scrollTop;
                }
                break;
        }

        if(self.filters().length){
            if(hash!==""){
                hash = hash + "&";
            }
            var filt = "";
            for(var f in self.filters()){
                filt = filt + self.filters()[f].label + ",";
            }
            filt = filt.substr(0,filt.length-1);
            hash = hash + 'f=' + filt;
        }

        if(this.sort()!==SORTS[0]){
            if(hash!==""){
                hash = hash + "&";
            }
            hash = hash + "sort=" + this.sort().type + "&dir=" + (this.sort().asc ? 'asc' : 'desc'); 
        }

        window.location.hash = hash;
    }

    this.parseHash = function(){
        var hash = window.location.hash.substr(1);
        var params = {};
        try{
            var pms = hash.split("&");
            for(var p in pms){
                var kvp = pms[p].split("=");
                params[kvp[0]] = kvp[1];
            }
        }catch(ex){

        }

        if(params["sort"]){
            var asc = params["dir"] ? (params["dir"]==="asc" ? true : false) : true;
            for(var s in SORTS){
                if(SORTS[s].type===params["sort"] && SORTS[s].asc == asc){
                    self.sort(SORTS[s]);
                }
            }
        }

        if(params["f"]){
            var filts = params["f"].split(",");
            for(var f in filts){
                var found = false;
                for(var g in FILTERS){
                    if(FILTERS[g].label === filts[f]){
                        self.filters.push(FILTERS[g]);
                        found = true;
                        break;
                    }
                }
                if(!found){
                    self.filters.push({label: filts[f], type: "UPPER(title)", multi: true, search: true});
                }
            }
        }

        switch(self.type()){
            case 'pager':
                self.getTotalCount();
                self.page((params["page"] ? params["page"] : 1));
                break;
            case 'infinite':
                self.getTotalCount();
                ROWS = Math.ceil($(window).height()/RECORD_HEIGHT) + 1;
                self.row(ROWS);
                $('.body').scrollTop(0);
                var movies = self.loadData(0,(ROWS*COLS), 0);
                self.movies(movies);
                break;
            case 'jit':
            case 'slideindex':
                self.getTotalCount();

                var top = params["top"] ? parseInt(params["top"]) : 0;
                self.lastElem = { scrollTop: top };
                $('.body').scrollTop(top);
                var pcttop = (top/self.bodyHeight())*100;
                $('.slider').css('top',pcttop+'%');
                self.doScroll(self.lastElem);

                break;
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'movies.sqlite', true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function(e) {
        var uInt8Array = new Uint8Array(this.response);
        self.db = new SQL.Database(uInt8Array);
        process();
    };
    xhr.send();

    function process() {
        COLS = Math.floor(($(window).width())/RECORD_WIDTH);
        ROWS = Math.ceil(($(window).height()-60)/RECORD_HEIGHT);
        self.row(ROWS);
        if(self.type()==='infinite'){
            ROWS = ROWS + 1;
        }
        if(self.type()==='jit' || self.type()==='slideindex'){
            ROWS = ROWS + 2;
        }

        if(window.location.hash){
            self.parseHash();
        }else{
            self.inscroll(true);
            self.getTotalCount();
            var movies = self.loadData(0,(ROWS*COLS), 0);
            self.movies(movies);
            self.loadtimeout = setTimeout(function(){
                self.inscroll(false);
            },LOAD_TIME);  
        }
    }

    $(window).resize(process);
}

ko.applyBindings(new viewModel());