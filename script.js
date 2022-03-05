"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');	

		while(personalMovieDB.counts == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
						b = +prompt('На сколько его оцените?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;			
			} else {
				i--;
			}	
		}
	},
	detectPersonalLevel: function() {
		if(personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
			console.log('Вы - классический зритель');
		} else if(personalMovieDB.count > 30) {
			console.log('Вы - киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},	
	writeYourGenres: function() {
		for (let i=1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if (genre == '' || genre == null) {
				console.log('Вы ввели некорректные данные');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}			
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function() {
		if(personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		}
		// Необходимо при выове функции передать аргумент personalMovieDB.showMyDB(personalMovieDB.privat);
	}
};














// function showMyDB() {
// 	if(personalMovieDB.privat == false) {
// 		console.log(personalMovieDB)
// 	}
// }



// let xz = 0;
// while(xz < 2) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 				b = prompt('На сколько его оцените?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;	
// 		xz++		
// 	} 
// }