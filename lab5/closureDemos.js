let demos = {
	'simplestClosure': function () {
		function outer() {
			let x = 5;

			function inner() {
				// тук имаме closure - x е локална за outer scope.
				// при извикването се използва запаметената СТОЙНОСТ,а не променливата x,
				// която не би била достъпна.
				console.log(x);
			}

			return inner;
		}


		let foo = outer();
		foo(); // едва тук се изпълнява кода в inner
	},
	'simplestNoClosure': function () {
		let x = 5;

		function outer() {
			function inner() {
				// тук нямаме closure - x не е локална за outer scope.
				// просто се използва глобалното x
				console.log(x);
			}

			return inner;
		}


		let foo = outer();
		foo();
	},
	'noClosureInLoops_theProblem': function () {
		let functions = [];

		for (var i = 0; i < 3; i++) {
			functions[i] = function () {
				console.log(`i = ${i}`);
			}
		}

		console.dir(functions); // имаме масив от 3 функции

		functions[0](); // искаме да видим "i = 0", но ...
	},
	'noClosureInLoops_Try1': function () {
		let functions = [];

		function main() {
			for (var i = 0; i < 3; i++) {
				functions[i] = function () {
					console.log(`i = ${i}`);
				}
			}
			// i е локална за main, но стойността й се
			// запзава в closure-а, точно преди да излезем от main()
			// а тогава i e 3. Погледнете следващия ('closureActivation') пример.
		}
		main();

		functions[0](); // искаме да видим "i = 0", но ...
	},
	'closureActivation': function (){
		function outer() {
			let i = 2;

			function inner() {
				console.log(`i = ${i}`);
			}

			i = 5;
			//closure ще се "задейства" преди да излезем от outer, т.е.
			// когато i = 5, не 2
			return inner;
		}

		outer()(); // какво ще видим: 5 или 2 ?
	},
	'noClosureInLoops_Solution1': function (){
		let functions = [];

		for (var i = 0; i < 3; i++) {

			function main(i) {
				functions[i] = function () {
					console.log(`i = ${i}`);
				}
			}
			main(i);

		}

		functions[0](); // искаме да видим "i = 0", и успяхме !
	},
	'noClosureInLoops_Solution2': function (){
		// вариант на Solution1 - но чрез IIFE, а не main
		let functions = [];

		for (var i = 0; i < 3; i++) {

			(function(i) {
				functions[i] = function () {
					console.log(`i = ${i}`);
				}
			})(i)

		}

		functions[0](); // искаме да видим "i = 0", и успяхме !
	},
}

// ако искаме да тестваме даден пример, например 'noClosureInLoops_Try1':
demos.noClosureInLoops_Try1();

// ако искате да изпълните кода във всички примери, откоментирайте долния код:

// for (prop in demos) {
// 	console.log(`~~~~~ ${prop} demo  output ~~~~~`);
// 	demos[prop]();
// 	console.log(`\n`);
// }
