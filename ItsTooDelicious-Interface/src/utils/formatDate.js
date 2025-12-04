export function formatDate(date) {
  return new Date(date).toLocaleString('pt-BR', {
    month: 'short',
    hour: '2-digit',
    day: 'numeric',
    minute: '2-digit',
  });
}
