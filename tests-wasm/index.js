import * as array from './y-array.tests.js'
import * as map from './y-map.tests.js'
import * as text from './y-text.tests.js'
import * as xml from './y-xml.tests.js'
import * as weak from './y-weak-link.tests.js'
import * as doc from './y-doc.tests.js'
import * as undo from './y-undo.tests.js'
import * as stickyIndex from './sticky-index.tests.js'
import * as awareness from './awareness.tests.js'
import * as editingTraces from './editing-traces.tests.js'

import {runTests} from 'lib0/testing'
import {isBrowser, isNode} from 'lib0/environment'
import * as log from 'lib0/logging'
import {setPanicHook} from 'ywasm'

setPanicHook()
if (isBrowser) {
    log.createVConsole(document.body)
}
runTests({
    array, text, map, xml, weak, doc, undo, stickyIndex, awareness, editingTraces
}).then(success => {
    /* istanbul ignore next */
    if (isNode) {
        process.exit(success ? 0 : 1)
    }
})