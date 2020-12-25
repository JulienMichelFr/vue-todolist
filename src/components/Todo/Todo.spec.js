import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo/Todo";

describe("Todo.vue", () => {
  it("renders todo", () => {
    const text = "My Todo";
    const date = new Date();
    const status = false;
    const wrapper = shallowMount(Todo, {
      propsData: {
        text,
        date,
        status
      }
    });
    expect(wrapper.find(".todo__text").text()).toMatch(text);
    expect(wrapper.find(".todo__status").text()).toMatch(status.toString());
    expect(wrapper.find(".todo__date").text()).toMatch(
      date.toLocaleDateString()
    );
  });
});
