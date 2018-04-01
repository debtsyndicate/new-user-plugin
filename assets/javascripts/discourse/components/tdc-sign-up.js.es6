import { solidarity, hasDebt } from '../tdc-utils';

export default Ember.Component.extend({
  // isDebtor and isInSolidarity control the visibility of the user fields
  isDebtor: false,
  isInSolidarity: false,

  actions: {
    collectiveSelected(event) {
      // initialize the container for the custom fields
      if (this.get('store.customFields') === undefined) { console.log('customFields was undefined'); Ember.set(this, 'store.customFields', {})};

      // store the list of checked collectives in 'customFields.collectives'
      const elements = $(".collective-selectors input:checked").toArray()
      
      Ember.set(this, 'store.customFields.collectives', elements.map(element => element.attributes.id.textContent));
      
      this.set('isInSolidarity', this.get('store.customFields.collectives').includes(solidarity));
      this.set('isDebtor', hasDebt(this.get('store.customFields.collectives')));
    }
  }
});