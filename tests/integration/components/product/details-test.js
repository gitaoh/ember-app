import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('price', {
      original: 50,
      current: 40,
    });

    await render(hbs`<Product::Details @price={{this.price}} />`);

    // eslint-disable-next-line ember/no-pause-test
    // await this.pauseTest();
    assert.dom('del.small').hasText('$40');
    //
    // assert.equal(this.element.textContent.trim(), '');
    //
    // // Template block usage:
    // await render(hbs`
    //   <Product::Details>
    //     template block text
    //   </Product::Details>
    // `);
    //
    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
