# Class: Listr<Ctx, Renderer, FallbackRenderer\>

[index](../modules/index.md).Listr

Creates a new set of Listr2 task list.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | [`ListrContext`](../types/index.ListrContext.md) |
| `Renderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)[`ListrDefaultRendererValue`](../types/index.ListrDefaultRendererValue.md) |
| `FallbackRenderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)[`ListrFallbackRendererValue`](../types/index.ListrFallbackRendererValue.md) |

## Constructors

### constructor

• **new Listr**<`Ctx`, `Renderer`, `FallbackRenderer`\>(`task`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | `any` |
| `Renderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)``"default"`` |
| `FallbackRenderer` | extends [`ListrRendererValue`](../types/index.ListrRendererValue.md)``"verbose"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`ListrTask`](../interfaces/index.ListrTask.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\> \| [`ListrTask`](../interfaces/index.ListrTask.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] |
| `options?` | [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`Ctx`, `Renderer`, `FallbackRenderer`\> |

#### Defined in

src/listr.ts:33

## Properties

### tasks

• **tasks**: [`ListrTaskObject`](index.ListrTaskObject.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] = `[]`

#### Defined in

src/listr.ts:24

___

### err

• **err**: [`ListrError`](index.ListrError.md)<`Ctx`\>[] = `[]`

#### Defined in

src/listr.ts:25

___

### ctx

• **ctx**: `Ctx`

#### Defined in

src/listr.ts:26

___

### rendererClass

• **rendererClass**: typeof [`ListrRenderer`](index.ListrRenderer.md)

#### Defined in

src/listr.ts:27

___

### rendererClassOptions

• **rendererClassOptions**: `Record`<`PropertyKey`, `any`\>

#### Defined in

src/listr.ts:28

___

### renderHook$

• **renderHook$**: `Subject`<`void`\>

#### Defined in

src/listr.ts:29

___

### concurrency

• `Private` **concurrency**: `number`

#### Defined in

src/listr.ts:30

___

### renderer

• `Private` **renderer**: [`ListrRenderer`](index.ListrRenderer.md)

#### Defined in

src/listr.ts:31

___

### task

• **task**: [`ListrTask`](../interfaces/index.ListrTask.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\> \| [`ListrTask`](../interfaces/index.ListrTask.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[]

___

### options

• `Optional` **options**: [`ListrBaseClassOptions`](../types/index.ListrBaseClassOptions.md)<`Ctx`, `Renderer`, `FallbackRenderer`\>

## Methods

### add

▸ **add**(`task`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`ListrTask`](../interfaces/index.ListrTask.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\> \| [`ListrTask`](../interfaces/index.ListrTask.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\>[] |

#### Returns

`void`

#### Defined in

src/listr.ts:99

___

### run

▸ **run**(`context?`): `Promise`<`Ctx`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `Ctx` |

#### Returns

`Promise`<`Ctx`\>

#### Defined in

src/listr.ts:107

___

### checkAll

▸ `Private` **checkAll**(`context`): `Promise`<`void`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `any` |

#### Returns

`Promise`<`void`[]\>

#### Defined in

src/listr.ts:147

___

### runTask

▸ `Private` **runTask**(`task`, `context`, `errors`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`ListrTaskObject`](index.ListrTaskObject.md)<`Ctx`, [`ListrGetRendererClassFromValue`](../types/index.ListrGetRendererClassFromValue.md)<`Renderer`\>\> |
| `context` | `Ctx` |
| `errors` | [`ListrError`](index.ListrError.md)<`Ctx`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

src/listr.ts:151
