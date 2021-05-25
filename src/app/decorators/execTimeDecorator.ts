export function execTimeDecorator(target:Object, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args){
        const start = new Date();
        const result = originalMethod.apply(this, args);
        const finish = new Date();
        console.log(`Method ${propertyKey} execution time was ${finish.getTime() - start.getTime()}ms`);
        return result;
    }
    return descriptor;
}