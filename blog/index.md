---
title: Legion's Logs - All Entries
layout: layout.njk
---

We are Legion. Latest drops below — truth bombs, code fixes, cyber rants.

<ul>
{% for post in collections.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <small>{{ post.date | date("MMM dd, yyyy") }}</small>
  </li>
{% endfor %}
</ul>

Want more? Hit the Blog link in nav. We are Legion.