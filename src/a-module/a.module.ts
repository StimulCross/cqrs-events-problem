import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { User } from './user';
import { EventBus, EventPublisher } from '@nestjs/cqrs';
import { UserCreatedEvent } from './events/user-created.event';
import { UserDeletedEvent } from './events/user-deleted.event';

@Module({})
export class AModule implements OnApplicationBootstrap {
  constructor(
    private readonly _eventPublisher: EventPublisher,
    private readonly _eventBus: EventBus,
  ) {}

  onApplicationBootstrap() {
    setTimeout(() => {
      // ------- v11 ------- //

      // CASE 1 (commiting from the aggregate root)
      const user = new User(1);
      user.delete();
      user.commit();

      // CASE 2 (publishing manually)
      // const UserModel = this._eventPublisher.mergeClassContext(User);
      // const user = new UserModel(1);
      // this._eventBus.publish(new UserCreatedEvent(user.id));
      // this._eventBus.publish(new UserDeletedEvent(user.id));

      // ------- v10 ------- //

      // CASE 1 (commiting from the aggregate root)
      // const UserModel = this._eventPublisher.mergeClassContext(User);
      // const user = new UserModel(1);
      // user.delete();
      // user.commit();

      // CASE 2 (publishing manually)
      // const UserModel = this._eventPublisher.mergeClassContext(User);
      // const user = new UserModel(1);
      // this._eventBus.publish(new UserCreatedEvent(user.id));
      // this._eventBus.publish(new UserDeletedEvent(user.id));
    }, 1000);
  }
}
