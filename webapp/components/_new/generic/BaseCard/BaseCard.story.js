import { storiesOf } from '@storybook/vue'
import helpers from '~/storybook/helpers'
import BaseCard from './BaseCard.vue'

storiesOf('Generic/BaseCard', module)
  .addDecorator(helpers.layout)

  .add('default', () => ({
    components: { BaseCard },
    template: `
      <base-card>
        <h2 class="title">I am a card heading</h2>
        <p>And I am a paragraph.</p>
      </base-card>
    `,
  }))

  .add('with slot: hero image', () => ({
    components: { BaseCard },
    template: `
      <base-card style="width: 400px;">
        <template v-slot:heroImage>
          <img class="image" src="https://unsplash.com/photos/R4y_E5ZQDPg/download" />
        </template>
        <h2 class="title">I am a card heading</h2>
        <p>And I am a paragraph.</p>
      </base-card>
    `,
  }))

  .add('with slot: image column', () => ({
    components: { BaseCard },
    template: `
      <base-card style="width: 600px;">
        <template v-slot:imageColumn>
          <img class="image" src="/img/sign-up/humanconnection.svg" />
        </template>
        <h2 class="title">I am a card heading</h2>
        <p>And I am a paragraph.</p>
      </base-card>
    `,
  }))

  .add('with highlight prop', () => ({
    components: { BaseCard },
    template: `
      <base-card highlight style="width: 400px;">
        <h2 class="title">I am a card heading</h2>
        <p>And I am a paragraph.</p>
      </base-card>
    `,
  }))

  .add('with wideContent prop', () => ({
    components: { BaseCard },
    template: `
      <base-card wideContent style="width: 400px;">
        <h2 class="title">I am a card heading</h2>
        <p>And I am a paragraph.</p>
      </base-card>
    `,
  }))
