// The rule is disabled because this is a file for mixins and each mixin require class expression
/* eslint-disable max-classes-per-file */

import {
  ElementConstructor,
  InputElementConstructor,
} from '../../types';

export function addDisabling<TBase extends ElementConstructor>(
  Base: TBase,
) {
  return class extends Base {
    disable() {
      this.element.setAttribute('disabled', '');
    }

    enable() {
      this.element.removeAttribute('disabled');
      if (this.unsetWaiting) {
        this.unsetWaiting();
      }
    }
  };
}

export function addValueInterface<
  TBase extends InputElementConstructor,
>(Base: TBase) {
  return class extends Base {
    get value() {
      return this.element.value;
    }

    set value(value) {
      this.element.value = value;
    }

    setDefaultValue() {
      this.value = this.element.defaultValue;
    }
  };
}
