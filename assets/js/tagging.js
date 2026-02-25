/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint quote-props: ["error", "always"] */

// AA Tracking
const triggerAA = (eventName, eventValue) => {
  var message;
  var messageObject;

  // get the global object data
  const mdq = window.mdq || [];

  // set the events
  mdq.events = mdq.events || [];
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
  
  mdq.push(["track", eventName, eventValue]);
};


window.addEventListener('DOMContentLoaded', async () => {
  const volunteerListingFilters = document.querySelectorAll('body');

  if (volunteerListingFilters) {
    volunteerListingFilters.forEach((volunteerListingFilter) => {
      // volunteerListingFilter.querySelectorAll('select').forEach((dropdown) => {
      //   dropdown.addEventListener('change', (e) => {
      //     const eventName = 'filter';
      //     const componentName = 'Volunteer Listing';
      //     const filterName = e.currentTarget.querySelector('option[value=""]').innerText;
      //     const filterValue = e.currentTarget.querySelector('option:checked').innerText;
      //     const eventValue = {
      //       'component_name': componentName,
      //       'filter_name': filterName,
      //       'filter_value': filterValue,
      //     };
      //     triggerAA(eventName, eventValue);
      //   });
      // });

      const showResultBtn = volunteerListingFilter.querySelectorAll('.btn');
      if (showResultBtn) {
        showResultBtn.forEach((btn) => {
          btn.addEventListener('click', () => {
            const eventName = 'show_result';
            const componentName = 'Volunteer Listing';
            const eventValue = {
            'component_name': componentName,
          };
          triggerAA(eventName, eventValue);
          });
       });
      }
    });
  }
});
