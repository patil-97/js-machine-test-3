
const items = [
    { title: "HTML Standard markup language for creating web pages.", description: "Standard markup language for creating web pages." },
    { title: "CSS", description: "Style sheet language used for describing the presentation of a document." },
    { title: "JavaScript", description: "Programming language that enables interactive web pages." },
    { title: "Python", description: "High-level programming language known for its readability." },
    { title: "Java", description: "Widely-used programming language for building server-side applications." },
    { title: "C++", description: "General-purpose programming language with high performance." },
    { title: "C#", description: "Programming language developed by Microsoft for a variety of applications." },
    { title: "PHP", description: "Server-side scripting language designed for web development." },
    { title: "Ruby", description: "Dynamic programming language known for its simplicity and productivity." },
    { title: "Swift", description: "Powerful and intuitive programming language for iOS and macOS development." },
    { title: "Kotlin", description: "Modern programming language used for Android development." },
    { title: "SQL", description: "Language for managing and manipulating databases." },
    { title: "NoSQL", description: "Database management systems that do not use SQL." },
    { title: "GraphQL", description: "Query language for APIs and runtime for executing those queries." },
    { title: "Go", description: "Statically typed, compiled programming language designed at Google." },
    { title: "Rust", description: "Programming language focused on safety and performance." },
    { title: "TypeScript", description: "Superset of JavaScript that adds static types." },
    { title: "R", description: "Programming language for statistical computing and graphics." },
    { title: "MATLAB", description: "High-level language and interactive environment for numerical computation." },
    { title: "Perl", description: "High-level, general-purpose programming language." },
    { title: "Scala", description: "Programming language that integrates features of object-oriented and functional languages." },
    { title: "Haskell", description: "Purely functional programming language." },
    { title: "Lua", description: "Lightweight, embeddable scripting language." },
    { title: "Dart", description: "Programming language optimized for building web and mobile apps." },
    { title: "Elixir", description: "Functional, concurrent programming language built on the Erlang VM." },
    { title: "Erlang", description: "Programming language used to build massively scalable systems." },
    { title: "Objective-C", description: "Programming language used for macOS and iOS development." },
    { title: "Shell", description: "Command-line interpreter and scripting language for Unix systems." },
    { title: "Groovy", description: "Object-oriented programming language for the Java platform." },
    { title: "Visual Basic", description: "Event-driven programming language developed by Microsoft." },
    { title: "C", description: "General-purpose programming language used for system programming." },
    { title: "F#", description: "Functional-first programming language developed by Microsoft." },
    { title: "COBOL", description: "Programming language used in business, finance, and administrative systems." },
    { title: "Fortran", description: "Programming language used for numerical and scientific computing." },
    { title: "Ada", description: "Structured, statically typed programming language." },
    { title: "Julia", description: "High-level programming language for numerical analysis and computational science." },
    { title: "VHDL", description: "Hardware description language used in electronic design automation." },
    { title: "Assembly", description: "Low-level programming language for computer architecture." },
    { title: "Prolog", description: "Logic programming language associated with artificial intelligence." },
    { title: "Scheme", description: "Functional programming language and a dialect of Lisp." },
    { title: "Lisp", description: "Programming language with a long history in AI research." },
    { title: "Pascal", description: "Procedural programming language used in teaching and industry." },
    { title: "Scratch", description: "Visual programming language for children and beginners." },
    { title: "SAS", description: "Software suite used for advanced analytics and business intelligence." },
    { title: "HTML5", description: "Latest version of the HTML standard." },
    { title: "CSS3", description: "Latest version of the CSS standard." },
    { title: "Bootstrap", description: "Popular front-end framework for building responsive web pages." },
    { title: "React", description: "JavaScript library for building user interfaces." },
    { title: "Angular", description: "Platform for building mobile and desktop web applications." },
    { title: "Vue.js", description: "JavaScript framework for building user interfaces and single-page applications." }
];


let cards = "";

items.forEach((lang) => {
	cards += `<div class="col-md-4 mb-4">
				<div class="card h-100">
					<div class="card-header" data-toggle="tooltip" data-placement="top" title="${lang.title}">
						<h2 class="mb-0">${lang.title}</h2>
					</div>
					<div class="card-body">
						<p>${lang.description}</p>
					</div>
					<div class="card-footer d-flex justify-content-between">
						<button class="btn btn-outline-primary">Edit</button>
						<button class="btn btn-outline-danger">Remove</button>
					</div>				
				</div>
			</div>`
});

document.getElementById("cards").innerHTML = cards;

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})