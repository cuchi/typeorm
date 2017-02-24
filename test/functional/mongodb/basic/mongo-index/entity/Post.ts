import {Entity} from "../../../../../../src/decorator/entity/Entity";
import {Column} from "../../../../../../src/decorator/columns/Column";
import {ObjectID} from "mongodb";
import {ObjectIdColumn} from "../../../../../../src/decorator/columns/ObjectIdColumn";
import {Index} from "../../../../../../src/decorator/Index";

@Entity()
@Index(["title", "name"])
@Index(() => ({ title: -1, name: -1, count: 1 }))
@Index("title_name_count", () => ({ title: 1, name: 1, count: 1 }))
@Index("title_name_count_reversed", () => ({ title: -1, name: -1, count: -1 }))
export class Post {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @Index()
    title: string;

    @Column()
    @Index()
    name: string;

    @Column()
    @Index()
    count: number;

}