/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint quote-props: ["error", "always"] */

import triggerAA from './aa-tagging';

window.addEventListener('DOMContentLoaded', async () => {
  const volunteerListingFilters = document.querySelectorAll('.hero');

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
