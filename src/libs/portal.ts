export function createPortalRoot(id: string): HTMLDivElement {
  const root = document.createElement('div');
  root.setAttribute('id', id);

  return root;
}

export function lockBody(body: HTMLElement) {
  body.dataset['hidden'] = (
    Number(body?.dataset['hidden'] ?? 0) + 1
  ).toString();
  body.classList.add('hidden');
}

export function unlockBody(body: HTMLElement) {
  const hiddenCount = Number(body.dataset['hidden'] ?? 0) - 1;

  if (hiddenCount === 0) {
    body.classList.remove('hidden');
  }

  body.dataset['hidden'] = hiddenCount > 0 ? hiddenCount.toString() : '0';
}
