<article>
    <header>
        <span class="date">{{ newItem.published_at }}</span>
        <h2><a href="#">{{ newItem.title | safe }}</a></h2>
    </header>
    <a href="#" class="image fit"><img src="{{ newItem.photo }}" alt="{{ newItem.title }}" /></a>
    <p>{{ newItem.description | truncate | safe }}</p>
    <ul class="actions special">
        <li><a href="#" class="button">Full Story</a></li>
    </ul>
</article>