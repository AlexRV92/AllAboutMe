{% extends 'base.html.tpl' %}

{% block bodyClass %}fade-in{% endblock %}

{% block intro %}
	<!-- Intro -->
	<div id="intro">
		<h1>This is<br />
		Massively</h1>
		<p>A free, fully responsive HTML5 + CSS3 site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a><br />
		and released for free under the <a href="https://html5up.net/license">Creative Commons license</a>.</p>
		<ul class="actions">
			<li><a href="#header" class="button icon solo fa-arrow-down scrolly">Continue</a></li>
		</ul>
	</div>
{% endblock %}

{% block sectionContent %}
	<!-- Main -->
	<div id="main">

		<!-- Featured Post -->
			<article class="post featured">
				<header class="major">
					<span class="date">April 25, 2017</span>
					<h2><a href="#">And this is a<br />
					massive headline</a></h2>
					<p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
					facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
					amet nullam sed etiam veroeros.</p>
				</header>
				<a href="#" class="image main"><img src="http://flashexperience.net/eoi/massively/images/pic01.jpg" alt="" /></a>
				<ul class="actions special">
					<li><a href="#" class="button large">Full Story</a></li>
				</ul>
			</article>

		<!-- Posts -->
		<section class="posts">
			{% for newItem in news %}
				{% include 'partials/new-item-list.html.tpl' %}
			{% endfor %}
		</section>

		<!-- Footer -->
		<footer>
			<div class="pagination">
				<!--<a href="#" class="previous">Prev</a>-->
				<a href="#" class="page active">1</a>
				<a href="#" class="page">2</a>
				<a href="#" class="page">3</a>
				<span class="extra">&hellip;</span>
				<a href="#" class="page">8</a>
				<a href="#" class="page">9</a>
				<a href="#" class="page">10</a>
				<a href="#" class="next">Next</a>
			</div>
		</footer>

	</div>
{% endblock %}