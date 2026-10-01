/*
 * Same-origin Scramjet service-worker bridge.
 *
 * Browsers do not allow an HTML page on one origin to register a Service Worker
 * from another origin. Keep THIS file beside index.html. It imports the
 * Scramjet/TongSherbet worker implementation from the existing CDN so the
 * /~/ encoded routes are intercepted by a worker that controls this origin.
 */
importScripts('https://cdn.jsdelivr.net/gh/Mo9nikeypurple/skool@main/sw%20(4).js');
