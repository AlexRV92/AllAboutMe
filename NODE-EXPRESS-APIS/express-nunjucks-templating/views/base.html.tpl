<!DOCTYPE HTML>
<html>
	<head>
		<title>{% block pageTitle %}Massively{% endblock %}</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        {% include 'includes/css.html.tpl' %}
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper" class="{% block bodyClass %}{% endblock %}">

				<!-- Intro -->
                {% block intro %}
                {% endblock %}

				<!-- Header -->
                {% include 'includes/header.html.tpl' %}

				<!-- Nav -->
                {% include 'includes/navbar.html.tpl' %}

				<!-- Main -->
                {% block sectionContent %}
                {% endblock %}

				<!-- Footer -->
				{% include 'includes/footer.html.tpl' %}

				<!-- Copyright -->
				{% include 'includes/copyright.html.tpl' %}
			</div>

		<!-- Scripts -->
		{% include 'includes/js.html.tpl' %}

	</body>
</html>