---
title: Jekyll Test
layout: default
---

{% if jekyll.environment == "production" %}
### Environment: Production

{% elsif jekyll.environment == "development" %}
### Environment: Development

{% else %}
### ERROR: No Environment Found
{% endif %}



see the [metadata]({{ site.baseurl }}/meta/)
