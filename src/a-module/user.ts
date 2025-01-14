import { AggregateRoot } from '@nestjs/cqrs';
import { Publishable } from '@nestjs/cqrs';
import { UserCreatedEvent } from './events/user-created.event';
import { UserDeletedEvent } from './events/user-deleted.event';

@Publishable()
export class User extends AggregateRoot {
  constructor(private readonly _id: number) {
    super();
    this.apply(new UserCreatedEvent(_id));
  }

  public get id(): number {
    return this._id;
  }

  delete() {
    this.apply(new UserDeletedEvent(this._id));
  }

  // static create(id: number): User {
  //   const user = new User(id);
  //   user.apply(new UserCreatedEvent(user.id));
  //   return user;
  // }
}
