/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint quote-props: ["error", "always"] */
/* global _satellite */

// AA Tracking
const triggerAA = (eventName, eventValue) => {
  var message;
  var messageObject;

  // get the global object data
  const mdq = window.mdq || {};

  // set the events
  mdq.events = mdq.events || {};
  mdq.events.eventName = eventName;
  mdq.events.eventPayload = eventValue;

  message = `AA Debug:
  event_name: ${eventName},
  event_value: ${eventValue}`;
  messageObject = { eventName, eventValue };

  if (typeof _satellite !== 'undefined') {
    if (typeof window.Granite !== 'undefined' && typeof window.Granite.author !== 'undefined') {
      console.info('Trigger satellite track');
    }
    _satellite.track(mdq.events.eventName);
  }

  if (typeof window.Granite !== 'undefined' && typeof window.Granite.author !== 'undefined') {
    console.debug(mdq);

    // Debug - uncomment during development
    if (window.console) {
      if (typeof eventValue === 'object') {
        console.log('AA Debug: ');
        console.log(JSON.stringify(messageObject));
      } else {
        console.log(message);
      }
    }
  }

  // For testing purpose only
  if (window.console) {
    if (typeof eventValue === 'object') {
      console.log('AA Debug: ');
      console.log(`event_name: ${eventName}`);
      console.log(`event_value: ${JSON.stringify(eventValue)}`);
    } else {
      console.log(message);
    }
  }
};

export default triggerAA;

window.addEventListener('DOMContentLoaded', () => {
  window.mdq = {};
});
