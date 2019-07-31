import { JupyterFrontEnd } from '@jupyterlab/application';
import { DocumentRegistry } from '@jupyterlab/docregistry';
import { INotebookModel, NotebookPanel } from '@jupyterlab/notebook';
import { IDisposable } from '@phosphor/disposable';
import { GcpService } from './gcp';
export declare const iconStyle: string;
/**
 * A notebook widget extension that adds a button to the toolbar.
 */
export declare class ButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {
    private gcpService;
    constructor(gcpService: GcpService);
    /**
     * Create a new extension object.
     */
    createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable;
}
declare const _default: import("@phosphor/application").IPlugin<JupyterFrontEnd<JupyterFrontEnd.IShell>, void>[];
export default _default;
