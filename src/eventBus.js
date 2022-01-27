import mitt from 'mitt';

// EventBus
const EventBus = mitt();

export default {
    $on: (...args) => EventBus.on(...args),
    $off: (...args) => EventBus.off(...args),
    $emit: (...args) => EventBus.emit(...args)
}
