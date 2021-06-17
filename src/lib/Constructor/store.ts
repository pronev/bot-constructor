import { writable, Writable } from 'svelte/store';

const dndListStore = initial => {
  const store = writable(initial);

  return {
    ...store,
    add: (button) => store.update(currentList => {
      let id = currentList.length + 1;
      let step = button.createStep(id);
      currentList = [...currentList, {id: id, component: button.options.component, step: step}];
      return currentList;
    }),
    remove: (id) => store.update(currentList => {
      currentList = currentList.filter(s => s.id !== id);
      return currentList;
    })
  }
}

const dialogsStore = initial => {
  const store = writable(initial);

  return {
    ...store,
    add: () => {
      let size = Object.keys(dialogs).length;
      let id = size - 4;
      const dndList = dndListStore([]);
      dialogs[id] = dndList;
      return id;
    },
    get: (id) => {
      let dialog = dialogs[id];
      return dialog;
    }
  }
}


//const dndList = dndListStore([]);
export const dialogs = dialogsStore({});
