import { types, applySnapshot } from 'mobx-state-tree';
import * as R from 'ramda';
import { Hotels } from 'services';
import Hotel from './models/Hotel';

const HotelsStore = types
  .model({
    status: types.maybe(types.enumeration(['loading', 'error', 'success'])),
    data: types.array(Hotel),
    errors: types.maybeNull(
      types.model({
        code: types.string,
        message: types.frozen()
      })
    )
  })
  .actions(self => ({
    updateStatus(status) {
      self.status = status;
    },
    setErrors(errors = null) {
      self.errors = errors;
    }
  }))
  .actions(self => ({
    search: async () => {
      self.setErrors();
      self.updateStatus('loading');

      try {
        const hotels = await Hotels.search();

        applySnapshot(self, hotels);

        self.updateStatus('success');
      } catch (err) {
        self.setErrors(R.pathOr(null, ['response', 'body', 'errors'], err));
        self.updateStatus('error');
      }
    }
  }));

export default HotelsStore;
