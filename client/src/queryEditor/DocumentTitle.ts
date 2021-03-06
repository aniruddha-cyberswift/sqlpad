import { useEffect } from 'react';
import { useEditorStore } from '../stores/editor-store';

/**
 * This component isolates the work of updating the document title on query name changes.
 * This prevents the main QueryEditor component from needing to render on name change.
 * TODO make this a custom hook
 * @param {object} props
 */
function DocumentTitle({ queryId }: { queryId: string }) {
  const title = useEditorStore((s) => {
    const queryName = s?.query?.name;
    return queryId === 'new' ? 'New query' : queryName;
  });

  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

export default DocumentTitle;
