import { Send } from 'lucide-react';

import { Button } from '@shared/ui/Button';

import styles from './RSVPForm.module.scss';

export function RSVPForm() {
  return (
    <form className={styles.form}>
      <label>
        Имя
        <input name="name" type="text" placeholder="Ваше имя" />
      </label>
      <label>
        Телефон
        <input name="phone" type="tel" placeholder="+7" />
      </label>
      <label>
        Комментарий
        <textarea name="comment" rows={4} placeholder="Например, буду с супругой" />
      </label>
      <Button type="submit">
        <Send size={18} aria-hidden="true" />
        Отправить
      </Button>
    </form>
  );
}
