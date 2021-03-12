import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { RouteComponentProps } from 'react-router';

// Типизация массива объектов (array of objects)
type Position = {
  id: string;
  value: string;
  title: string;
  main?: boolean;
};

const POSITIONS: Array<Position> = [
  {
    id: 'fd1',
    value: 'sdsd',
    title: 'cvcvc',
  },
  {
    id: 'gh2',
    value: 'klkl',
    title: 'iuiuiu',
    main: true,
  },
];

// Типизация стилей (styles)
const styles: React.CSSProperties = { display: 'block', marginBottom: '10px' };

// Типизация пропсов и объекта через type (props, object)
type Test1Props = {
  title: string;
  id?: number;
};

type formTypes = {
  inppT: string;
  qwe: number;
  data: {
    name: string;
    text: string | null;
  };
};

// Типизация может наследоваться (это нужно для использования нескольких видов пропсов, например: обычные пропсы(test, text) и пропсы роутера(match) )):
interface IPosts extends RouteComponentProps {
  test?: number;
  text?: string;
}

export const Test1: React.FC<Test1Props> = ({ title }: Test1Props) => {
  const formData: formTypes = {
    inppT: 'fdf',
    qwe: 12323,
    data: {
      name: '',
      text: null,
    },
  };

  // Типизация функций, их ивентов и элементов (function, event, HTML element)
  // React.SyntheticEvent - any event
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ): void => {
    console.log(`${e.clientX}, ${e.clientY}`);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Submit');
  };

  const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    console.log('Coppied');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Диструктуризация значения из ивента и переименование
    const {
      target: { value: inputText },
    } = e;
    console.log(inputText);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleClick}>Button</button>
      <a href='/' onClick={handleClick}>
        Link
      </a>

      <form onSubmit={handleSubmit}>
        <input onFocus={handleFocus} onCopy={handleCopy} />
        <input onChange={handleInputChange} />
      </form>
    </>
  );
};

// Типизация пропсов (props)
// children не контролируется
export const Test: React.FC<{ title: string }> = ({ title, children }) => {
  // Типизация хука useEffect (hook) - она не нужна)
  useEffect(() => {
    console.log('in useEffect');
  }, []);

  // Типизация хука (hook)
  const [state, setState] = useState<Array<number> | null>(null);
  setState([1, 2, 3]);

  // Типизация хука с использованием интерфейса (hook + interface)
  interface IUser {
    name: string;
    age?: number;
  }
  const [value, setValue] = useState<IUser>({ name: 'Yauhen' });

  // Типизация ссылки (ref)
  // Чтение и упpавление только через React (для библиотеке)
  const ref1 = useRef<HTMLElement>(null!);
  // Модифицируемая, для изменяемых экземпляров (сам управляю)
  const ref2 = useRef<HTMLElement | null>(null);

  // Тиипизация хуков ограничения перерендеринга
  let a: number = 12;
  let b: number = 15;
  const sum = (x1: number, x2: number) => x1 + x2;

  const memoizedCallback = useCallback(() => {
    sum(a, b);
  }, [a, b]);

  // const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]); - wrong?

  // Я не стал приводить типизацию useContext, useReducer (like redux)

  return (
    <div>
      {title}: {children}
      <p>{state}</p>
    </div>
  );
};

/*
 Типизация ХОК - компонента (HOC - component)
*/
type BaseProps = {
  primTitle: string;
  secTitle?: string;
};

type InjectedProps = {
  toggleStatus: boolean;
  toggle: () => void;
};

const Button = ({ primTitle, secTitle, toggle, toggleStatus }: any) => (
  <button onClick={toggle}>{toggleStatus ? primTitle : secTitle}</button>
);

// HOC - оборачивает существующий компонент своим функционалом
const withToggle = <BaseProps extends InjectedProps>(
  PassedComponent: React.ComponentType<BaseProps>
) => {
  return (props: BaseProps) => {
    const [toggleStatus, setToggle] = useState(false);

    return (
      <PassedComponent
        {...(props as BaseProps)}
        toggle={() => {
          setToggle(!toggleStatus);
        }}
        toggleStatus={toggleStatus}
      />
    );
  };
};

const ToggleButton = withToggle(Button);

export const App_: React.FC = () => (
  <ToggleButton primTitle='Main title' secTitle='Additional Title' />
);

/*
 Типизация асинхронных запросов (async, fetch, api)
*/
interface IPost {
  _id: string;
  text: string;
}

export async function sendRequest<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const Post = () => {
  useEffect(() => {
    const post = sendRequest<IPost>('http://localhost:8080/posts').then(() => {
      console.log(post);
    });
  }, []);

  // Второй вариант - указываем, что получаем промис с массивом постов
  useEffect(() => {
    fetch('http://localhost:8080/posts')
    .then(res => res.json() as Promise<IPost[]>)
  }, [])
};

/*
  Типизация редакса (redux)
*/
// В другом репозитории)


/*
 Ограничиние доступа к элементам класса
*/
// class User {
//   private rootRef = React.createRef<HTMLSelectElement>();

//   private _name: string;
//   private _year: number;

//   constructor(name: string, age: number) {

//       this._name = name;
//       this._year = this.setYear(age);
//   }
//   public displayYear(): void {
//       console.log("Год рождения: " + this._year);
//   }

//   public displayName(): void {
//       console.log("name: " + this._name);
//   }

//   private setYear(age: number): number {

//       return new Date().getFullYear() - age;
//   }

//   // Два свойства _name и _year используются с модификатором private, поэтому мы не можем их использовать вне класса, например, console.log(tom._name). То же самое относится к функции setYear(). Остальные функции доступны.
// }
