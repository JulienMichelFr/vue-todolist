import CreateTodo from "@/components/CreateTodo/CreateTodo";
import { shallowMount } from "@vue/test-utils";

/**
 * @return {{wrapper: Wrapper<Vue>}}
 */
function mount() {
  const wrapper = shallowMount(CreateTodo);
  return {
    wrapper
  };
}

describe("CreateTodo", () => {
  it("should render", () => {
    const { wrapper } = mount();
    expect(wrapper.find("#text-input")).toBeDefined();
    expect(wrapper.find("#status-input")).toBeDefined();
    expect(wrapper.find("#date-input")).toBeDefined();
  });
});
